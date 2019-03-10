import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',

}

class Lists extends Component {
	static navigationOptions = {
		title: 'Lists',
	}

	render() {
		return (
			<View style={styles}>
				<Text>Lists</Text>
			</View>
		)
	}
}

export default Lists