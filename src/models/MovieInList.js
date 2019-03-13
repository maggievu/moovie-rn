import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import imgPlaceholder from '../assets/img-placeholder-list.png'

const MovieInList = (props) => (
	<View style={styles.container}>
		<Image
			style={styles.image}
			source={ props.poster ? { uri: "https://image.tmdb.org/t/p/original" + props.poster } : imgPlaceholder }
		/>

		<View style={styles.textContainer}>
			<Text style={styles.title}>{props.title}</Text>
			<Text>Overview: {props.overview ? props.overview : '...'}</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginBottom: 10,
	},
	image: {
		width: '30%', 
		height: 200, 
		resizeMode: 'contain',
	},
	textContainer: {
		width: '70%',
		paddingLeft: 10,
		marginTop: 10,
	},
	title: {
		fontWeight: 'bold', 
		fontSize: 20,
		marginBottom: 10,
	},
})

export default MovieInList