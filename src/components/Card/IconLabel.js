import React, { Component } from 'react'
import { Icon, View } from 'native-base'
import Label from './Label'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'

export default IconLabel = (props) => {
    
    const {
        size,
        color,
        name,
        type
    } = props

    const { 
        iconLabelProps
    } = constants.defaultProps

        return(
            <View style={{flexDirection: 'row', alignItems: 'center', ...props.style}}>
                <Icon 
                name={name}
                type={type || undefined}
                style={{
                    fontSize: iconLabelProps.size[size],
                    color: iconLabelProps.color[color],
                    marginRight: 8
                }}>
                </Icon>
                <Label size={size} color={color}>
                    {props.children}
                </Label>
            </View>
        )
    }

IconLabel.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
}