import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Movie from './Movie'

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
}

const API_KEY = '8367b1854dccedcfc9001204de735470'
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

class NowPlaying extends Component {
	static navigationOptions = {
		title: 'NowPlaying',
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	}

	state = {
		totalResults: 0,
		movies: {},
		isLoaded: false,
	}

	async componentDidMount() {
		await fetch(url)
			.then(response => response.json())
			.then(myJson => {
				this.setState({
					totalResults: myJson["total_results"],
					movies: myJson.results,
					isLoaded: true
				})
			})
	}

	render() {
		let r = Math.floor(Math.random() * 20)
		console.log(r + " " + this.state.totalResults)
		return (
			<View style={styles}>
				<Movie 
					title={this.state.movies[r]["title"]}
					popularity={this.state.movies[r]["popularity"]}
					releaseDate={this.state.movies[r]["release_date"]}
					overview={this.state.movies[r]["overview"]}
				/>
			</View>
		)
	}
}

export default NowPlaying