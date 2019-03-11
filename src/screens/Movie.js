import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}

class Movie extends Component {
    render() {
        return (
            <View style={styles}>
                <Image 
                    style={{ width: 50, height: 50 }}
                    source={{ uri: "https://image.tmdb.org/t/p/original" + "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" }} 
                />
                <Text>{this.props.title}</Text>
                <Text>{this.props.popularity}</Text>
                <Text>{this.props.releaseDate}</Text>
                <Text>{this.props.overview}</Text>
            </View>
        )
    }
}

export default Movie