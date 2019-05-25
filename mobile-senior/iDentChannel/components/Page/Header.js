import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",
        height: 61,
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300
    }
})

export const Header = (props) => {
    return(
        <View style={styles.container}>
            <Image
                source={require('./../../images/Logo-iDent.png')}
            />
        </View>
    )
}