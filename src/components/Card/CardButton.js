import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, View, Icon } from 'native-base'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'

export default CardButton = (props) => {
    
    const {
        type,
    } = props

        if(props.type === 'Primary')
            return(
                <View style={{
                    width: 200,
                    height: 60,
                }}>
                    <Button primary 
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: '#8c388c',
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...props.style
                        }}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
                            {props.children}
                        </Text>
                    </Button>
                </View>
            )

        else if(props.type === 'FAB'){
            return(
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', ...props.style}}>
                    <Button 
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: 100,
                        }}>
                            
                        <Icon 
                            name='play'
                            style={{
                                color: '#943E95',
                            }}
                        /> 
                    </Button>
                </View>
            )
        }
    }

CardButton.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    type: PropTypes.string
}
