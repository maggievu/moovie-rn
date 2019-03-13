import React from 'react'

import { TextInput, View, StyleSheet } from 'react-native'

const Form = (props) => (
	<View style={styles.container}>
		<TextInput
			style={styles.textInput}
			placeholder='Type to search...'
			onEndEditing={props.onSubmit}
			onChangeText={props.onChangeText}
		/>
	</View>
)

export default Form

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	textInput: {
		width: 300,
		height: 40,
		borderColor: '#ccc',
		borderRadius: 10,
		borderWidth: 1,
		padding: 10,
	}
})