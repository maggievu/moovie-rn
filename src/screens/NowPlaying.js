import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',

}

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

	render() {
		return (
			<View style={styles}>
				<Text>Now Play</Text>
			</View>
		)
	}
}

export default NowPlaying