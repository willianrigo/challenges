import React, { Component } from 'react'
import { Container, H1, H2, H3 } from 'native-base'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'

export default Title = (props) => {
    
    const {
        size,
        color,
        weight,
    } = props

        const { 
            titleProps
        } = constants.defaultProps

        if(props.size === 'Large')
            return(
                <H1 style={{
                    color: titleProps.color[color],
                    fontWeight: titleProps.weight[weight],
                    ...props.style
                }}>
                {props.children}
                </H1>
            )

        else if(props.size === 'Medium'){
            return(
                <H2 style={{
                    color: titleProps.color[color],
                    fontWeight: titleProps.weight[weight],
                    ...props.style
                }}>
                {props.children}
                </H2>
            )
        }

        return(
            <H3 style={{
                color: titleProps.color[color],
                fontWeight: titleProps.weight[weight],
                ...props.style
            }}>
            {props.children}
            </H3>
        )
    }

Title.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.string
}
