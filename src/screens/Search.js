import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Form from '../components/Form'
import MovieInList from '../models/MovieInList'
import Header from '../components/Header'
import API_KEY from '../api_key'

const keywords = ['movie', 'person', 'tv']
const values = ['movies', 'people', 'tv show']

class Search extends Component {
	static navigationOptions = {
		title: 'Search',
	}
	
	state = {
		selectedIndex: 0,
		query: '',
		results: [],
		personName: null,
		hasData: false,
		error: null,
	}

	handleIndexChange = async (index) => {
		await this.setState({
			selectedIndex: index,
			error: null
		})
		
		if (this.state.query !== '') {
			await this.fetchMovieData()
		} else {
			await this.setState({
				results: [],
				hasData: false
			})
		}
	}

	fetchData = async () => {
		if (this.state.query !== '') {
			await this.fetchMovieData()
		}
	}
	
	fetchMovieData = async () => {
		const url = `https://api.themoviedb.org/3/search/${keywords[this.state.selectedIndex]}?api_key=${API_KEY}&query=${this.state.query}&language=en-US`
		console.log(url)
		await fetch(url)
			.then(response => response.json())
			.then(myJson => {
				if (myJson["results"].length > 0) {
					switch (this.state.selectedIndex) {
						case 0:
						case 2:
							this.setState({
								results: myJson["results"],
								hasData: true,
							})
							break
						case 1:
							this.setState({
								results: myJson["results"][0]["known_for"],
								personName: myJson["results"][0]["name"],
								hasData: true,
							})
							break
						default:
							break
					}
				} else {
					this.setState({ 
						results: [], 
						hasData: false, 
						error: 'No result found' 
					})
				}
			})
			.catch(error => this.setState({
				error: error
			}))
	}
	
	render() {
		const {selectedIndex, query, results, personName, hasData, error} = this.state

		return (
			<View style={styles.container}>
				<Header headerTitle={values[selectedIndex] + ' Search'} />
				<View style={styles.mainView}>
					<SegmentedControlTab
						tabStyle={styles.tabStyle}
						tabTextStyle={{ color: '#13bcd4', textTransform: 'capitalize' }}
						activeTabStyle={{ backgroundColor: '#13bcd4' }}
						values={values}
						selectedIndex={selectedIndex}
						onTabPress={this.handleIndexChange}
					/>
					<Form
						onSubmit={this.fetchData}
						onChangeText={text => this.setState({ query: text, error: null })}
					/>
					{!query && <Text style={styles.text}>Please type to search</Text>}
					{error && <Text style={styles.text}>{error}</Text>}
					{hasData && selectedIndex === 0 &&
						<Text style={styles.text}>Movie results for "{query}"</Text>
					}
					{hasData && selectedIndex === 1 &&
						<Text style={styles.text}>"{personName}" is in the following movies and tv shows</Text>
					}
					{hasData && selectedIndex === 2 &&
						<Text style={styles.text}>TV show results for "{query}"</Text>
					}
					{hasData &&
						<FlatList
							style={styles.list}
							data={results.length > 10 ? results.splice(0,10) : results}
							renderItem={({ item }) => 
								<MovieInList 
									poster={item["poster_path"]}
									title={item["title"] || item["name"]}
									overview={item["overview"]}
								/>
							}
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
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	tabStyle: {
		marginTop: 140,
		borderColor: '#13bcd4',
	},
	text: {
		marginTop: 20,
	},
	list: {
		marginTop: 20,
	}
})

export default Search