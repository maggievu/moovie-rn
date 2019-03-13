import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import MovieInList from '../models/MovieInList'
import Header from '../components/Header'
import API_KEY from '../api_key'

const keywords = ['popular', 'top_rated', 'upcoming']
const values = ['popular', 'top rated', 'upcoming']

const FlatListIntro = (props) => (
	<Text style={styles.text}>{props.value} Movies</Text>
)

class Lists extends Component {
	static navigationOptions = {
		title: 'Lists',
	}

	state = {
		selectedIndex: 0,
		query: '',
		results: [],
		hasData: false,
		error: null,
	}

	componentDidMount = () => {
		this.fetchMovieData()
	}

	handleIndexChange = async (index) => {
		await this.setState({
			selectedIndex: index,
		})
		this.fetchMovieData()
	}

	fetchMovieData = async () => {
		const url = `https://api.themoviedb.org/3/movie/${keywords[this.state.selectedIndex]}?api_key=${API_KEY}&language=en-US`
		console.log(url)
		await fetch(url)
			.then(response => response.json())
			.then(myJson => this.setState({
				totalResults: myJson["total_results"],
				results: myJson["results"],
				hasData: true,
			}))
			.catch(error => this.setState({
				error: error
			}))
	}

	render() {
		const { selectedIndex, query, results, hasData, error } = this.state

		return (
			<View style={styles.container}>
				<Header headerTitle={values[selectedIndex] + ' Movies List'} />
				<View style={styles.mainView}>
					<SegmentedControlTab
						tabStyle={styles.tabStyle}
						tabTextStyle={{ color: '#13bcd4', textTransform: 'capitalize' }}
						activeTabStyle={{ backgroundColor: '#13bcd4' }}
						values={values}
						selectedIndex={selectedIndex}
						onTabPress={this.handleIndexChange}
					/>
					<FlatListIntro value={values[selectedIndex]} />
					{hasData &&
						<FlatList
							style={styles.list}
							data={results.splice(0, 10)}
							renderItem={({ item }) =>
								<MovieInList
									poster={item["poster_path"]}
									title={item["title"] || item["name"]}
									overview={item["overview"]}
								/>
							}
							keyExtractor={(item, index) => index.toString()}
						/>
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	mainView: {
		marginLeft: 10,
		marginRight: 10,
	},
	tabStyle: {
		marginTop: 140,
		borderColor: '#13bcd4',
	},
	list: {
		marginTop: 20,
	},
	text: {
		textAlign: 'center',
		fontSize: 15,
		marginTop: 20,
		textTransform: 'uppercase'
	}
})

export default Lists