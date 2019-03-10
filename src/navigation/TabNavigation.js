import React from "react"
import { Platform } from "react-native"
import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import NowPlaying from "../screens/NowPlaying"
import Search from "../screens/Search"
import Lists from "../screens/Lists"
import SearchScreen from "../screens/Movies"

const TabNavigator = createBottomTabNavigator(
	{
		NowPlaying: {
			screen: NowPlaying,
			// navigationOptions: {
			// 	tabBarIcon: ({ focused }) => (
			// 		<TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film"} />
			// 	)
			// }
		},
		Search: {
			screen: Search,
			// navigationOptions: {
				// 	tabBarIcon: ({ focused }) => (
					// 		<TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} />
					// 	)
					// }
		},
		Lists: {
			screen: Lists,
		},
	// }, {
	// 	tabBarOptions: {
	// 		showLabel: false,
	// 		style: {
	// 			backgroundColor: BG_COLOR
	// 		}
	// 	}
	}
)

export default createAppContainer(TabNavigator)