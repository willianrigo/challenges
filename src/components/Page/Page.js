import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import PropTypes from "prop-types";
import * as constants from '../../utils/constants'
import { height, width } from '../../utils/constants'

export default class Page extends Component {

    constructor(props){
        super(props)
    }

    render(){
        
        const {
            background
        } = this.props;

        const { 
            pageProps
        } = constants.defaultProps

        return(
            <Container style={{
                height,
                width,
                backgroundColor: pageProps[background],
                flex: 1,
                ...this.props.style
            }}>
                
            </Container>
        )
    }
}

Page.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    background: PropTypes.string,
}
