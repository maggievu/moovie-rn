import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import NowPlaying from './src/screens/NowPlaying'
import TabNavigator from './src/navigation/TabNavigator'

let query = "hi"
const API_KEY = '8367b1854dccedcfc9001204de735470'
// const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
let keyword = 'movie/person/tv'
const url = `https://api.themoviedb.org/3/search/${keyword}?api_key=8367b1854dccedcfc9001204de735470&query=${query}`

export default class App extends Component {
  render() {
    // return <View></View>
    // return <RootStack />
    return <TabNavigator />
  }
}

// const RootStack = StackNavigator(
//   {
// 		myTab: {
// 			screen: TabNavigator,
// 			navigationOptions: { title: 'Header title' }
// 		},
//     // nowPlaying: { screen: NowPlaying },
//     // search: { screen: NowPlaying },
// 		// lists: { screen: NowPlaying }
//   },
//   // {
//   //   initialRouteName: 'search',
//   // }
// )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
