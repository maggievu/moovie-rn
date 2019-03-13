import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import imgPlaceholder from '../assets/img-placeholder-detail.png'

const MovieInDetail = (props) => (
	<View style={styles.container}>
		{props.poster &&
			<Image
				style={styles.image}
				source={{ uri: "https://image.tmdb.org/t/p/original" + props.poster }}
			/>
		}

		{!props.poster &&
			<Image
				style={styles.image}
				source={imgPlaceholder}
			/>
		}
		<Text style={styles.title}>{props.title}</Text>
		<Text>Popularity: {props.popularity}</Text>
		<Text>Released on: {props.releaseDate}</Text>
		<Text style={styles.overview}>Overview: {props.overview ? props.overview : '...'}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 140,
		marginLeft: 10,
		marginRight: 10,
	},
	image: {
		width: 350,
		height: 350,
		resizeMode: 'contain',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 10,
		marginBottom: 10,
	},
	overview: {
		marginTop: 10,
		textAlign: 'center',
		flex: 1,
		flexWrap: 'wrap',
	},
})


export default MovieInDetail