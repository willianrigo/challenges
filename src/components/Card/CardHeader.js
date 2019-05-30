import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Card, Content } from 'native-base'
import Label from './Label'
import IconLabel from './IconLabel'

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

                <View style={styles.content}>
                    <Thumb 
                        style={styles.thumb}
                    />

                    <View style={{justifyContent: 'center', flex: 2, alignItems: 'center', top: '5%'}}>
                        <Label
                            color={'Secondary'}
                            weight={'Bold'}
                            style={styles.label}
                        >
                            Nanotecnologia Aplicada a Implantodontia
                        </Label>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '60%', alignItems: 'center'}}>
                            <IconLabel 
                                name='md-eye'
                                color='Terciary'
                                size='Nano'
                            >1.280
                            </IconLabel>
                            <IconLabel 
                                name='clock'
                                color='Terciary'
                                size='Nano'
                            >1h 19min
                            </IconLabel>
                        </View>
                    </View>
            </View>
                    
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 262,
        height: 296,
        borderRadius: 6,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    thumb: {
        width: "100%",
        height: "50%",
        flex: 2
    },
    content: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    button: {
        position: "absolute",
        alignSelf: 'center',
    },
    label: {
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: '10%'
    }
})