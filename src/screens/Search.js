import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	
}

class Search extends Component {
	static navigationOptions = {
		title: 'Search',
	}

	render() {
		return (
			<View style={styles}>
				<Text>Search</Text>
			</View>
		)
	}
}

export default Search