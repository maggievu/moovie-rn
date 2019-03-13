import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import MovieInDetail from '../models/MovieInDetail'
import Header from '../components/Header';

const API_KEY = '8367b1854dccedcfc9001204de735470'

class NowPlaying extends Component {
	static navigationOptions = {
		title: 'Now Playing',
	}
	
	state = {
		totalResults: 0,
		movies: [],
		isLoading: true,
		error: null,
	}
	
	fetchData = async () => {
		const randomPage = Math.floor(Math.random() * 30)
		const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${randomPage}&language=en-US`
		await fetch(url)
			.then(response => response.json())
			.then(myJson => this.setState({
				totalResults: myJson["total_results"],
				results: myJson["results"],
				isLoading: false
			}))
			.catch(error => this.setState({
				error: error
			}))
	}
	
	componentDidMount() {
		this._navListener = this.props.navigation.addListener('didFocus', () => {
			this.fetchData()
		})
	}

	render() {
		let randomMovie = Math.floor(Math.random() * 20)
		const { results, isLoading, error } = this.state

		return (
			<View style={styles.container}>
				<Header headerTitle='Now Playing' />
				{ isLoading &&
					<View style={styles.loading}>
						<ActivityIndicator size="large" style={styles.colorLoading} />
					</View>
				}
				{ !isLoading &&
					<MovieInDetail
						poster={results[randomMovie]["poster_path"]}
						title={results[randomMovie]["title"]}
						popularity={results[randomMovie]["popularity"]}
						releaseDate={results[randomMovie]["release_date"]}
						overview={results[randomMovie]["overview"]}
					/>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	colorLoading: {
		color: "#0000ff",
	},
})

export default NowPlaying