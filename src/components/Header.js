import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => (
	<View style={styles.container}>
		<Text style={styles.title}>Moovie App</Text>
		<Text style={styles.subtitle}>{props.headerTitle}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: 0,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		width: '100%',
		height: 110,
		backgroundColor: '#13bcd4',
	},
	title: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	subtitle: {
		color: 'white',
		textTransform: 'uppercase',
	},
})

export default Header