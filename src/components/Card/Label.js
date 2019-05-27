import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'

export default Label = (props) => {
    
    const {
        size,
        color,
        weight,
    } = props

        const { 
            labelProps
        } = constants.defaultProps

        return(
            <Text style={{
                fontSize: labelProps.size[size],
                color: labelProps.color[color],
                fontWeight: labelProps.weight[weight],
                ...props.style
            }}>
            {props.children}
            </Text>
        )
    }

Label.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.string
}
