import React from "react"
import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import NowPlaying from "../screens/NowPlaying"
import Search from "../screens/Search"
import Lists from "../screens/Lists"

const TabNavigator = createBottomTabNavigator({
		NowPlaying: {
			screen: NowPlaying,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon
						name="film"
						color={tintColor}
						size={18}
					/>
				)
			})
		},
		Search: {
			screen: Search,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon
						name="search"
						color={tintColor}
						size={18}
					/>
				)
			})
		},
		Lists: {
			screen: Lists,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon
						name="star"
						color={tintColor}
						size={18}
					/>
				)
			})
		},
	}, {
		tabBarOptions: {
			showLabel: true,
			activeTintColor: 'white',
			inactiveTintColor: '#666',
			style: {
				backgroundColor: '#13bcd4',
			},
		},
	}
)

export default createAppContainer(TabNavigator)