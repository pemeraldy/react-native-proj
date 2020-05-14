import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const FirstNav = () => {
    return (
        <View style={navStyles.wrapper}>
            <View styel={{ flex: 2, flexDirection: 'row', width: 100 }}>
                <Text style={navStyles.navItem}>Puma</Text>
                <Text style={navStyles.navItem}>Nike</Text>
                <Text style={navStyles.navItem}>Addidas</Text>
            </View>
        </View >
    )
}


const navStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    navItem: {
        fontSize: 16,
        margin: 5,
        padding: 5,
        backgroundColor: 'orange'
    }
})

export default FirstNav