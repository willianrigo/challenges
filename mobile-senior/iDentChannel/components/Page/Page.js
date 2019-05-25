import React from 'react'
import { View, Image, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { Header } from './Header'
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEBED',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      width,
      position: 'relative'
    },
});

export default class Page extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Header/>
            </View>
        )
    }
}