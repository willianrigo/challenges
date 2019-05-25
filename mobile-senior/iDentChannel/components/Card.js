import React from 'react'
import { Text, Label, View, Button, Image, StyleSheet } from 'react-native'
import { Thumb } from './Thumb'
import * as styles from "./styles"

export default class Card extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <View>
                {/* Thumb */}
                <Thumb 
                    src= "https://avaazdo.s3.amazonaws.com/original_5c22670c4ef24.jpg"
                    rounded="All"
                 />
                {/* Button */}
                {/* Title */}
                {/* Icon */}

            </View>
    )
    }
}
