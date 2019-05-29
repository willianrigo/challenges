import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Card, Container } from 'native-base'
import Title from './Title'

export default class CardHeader extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const { 
            headerThumb,
            headerButton,
            headerTitle
        } = this.props

        return(
            <Card style={styles.container}>

                <CardButton
                    type={"FAB"}
                    style={styles.button}
                />

                <Thumb 
                    style={styles.thumb}
                />

                <Title
                    color={'Primary'}
                    style={styles.title}
                >
                    Nanotecnologia
                </Title>
                    
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 262,
        height: 296,
        // marginRight: 5,
        backgroundColor: 'red',
        flexDirection: 'row',
        borderRadius: 6,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    thumb: {
        width: "100%",
        height: "50%",
    },
    button: {
        position: "absolute",
        alignSelf: 'center'
    },
    title: {
        alignSelf: 'flex-end'
    }
})