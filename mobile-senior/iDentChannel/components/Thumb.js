import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'

// const rounded = {
//     Top: "border-top-radius 6px",
//     Bottom: "border-bottom-radius 6px",
//     All: "border-radius 6px",
//     False: "border-radius: 0"
// }

// apenas um valor vai ser passado para o rounded, (all, top, bottom ou false), dependendo
// do valor, o estilo vai ser diferente, como mostra a documentação

export const Thumb = (props) => {

    // const {
    //     src,
    //     button,
    //     rounded
    // } = props

    // const roundedDict = {
    //     "Top": "border-top-radius 6px",
    //     "Bottom": "border-bottom-radius 6px",
    //     "All": "border-radius 6px",
    //     "False": "border-radius: 0"
    // }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#000000',
            width: "100%"
        }
        
    })

    return(
        <View style ={styles.container}>
            <Image
                style={{width: 300, height: 400}}
                source={{uri: src}}
            />
        </View>
    )
}