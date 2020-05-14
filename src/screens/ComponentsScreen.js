import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const ComponentsScreen = () => {
    const name = 'Olamide'
    return (
        <View>
            <Text style={styles.headerStyle}> Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45,
        color: 'orange'
    },
    subHeaderStyle: {
        fontSize: 20,
        color: 'green'
    }
})


export default ComponentsScreen