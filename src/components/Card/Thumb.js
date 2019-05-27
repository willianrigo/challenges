import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { Button, View, Icon } from 'native-base'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'

export default Thumb = (props) => {
        
    const {
        src
    } = props;

    return(
        <View style={{height: 200, width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{
                    flex: 1
                }}
                source={require('./../../../images/img1.png')}
            />
        </View>
    )
}