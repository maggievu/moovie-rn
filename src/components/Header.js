import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => (
	<View style={styles.container}>
		<Text style={styles.title}>Moovie App</Text>
		<Text style={styles.subtitle}>{props.headerTitle}</Text>
	</View>
)

export default Header

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: 0,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		width: '100%',
		height: 120,
		backgroundColor: '#13bcd4',
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		color: 'white',
		textTransform: 'uppercase',
	},
})