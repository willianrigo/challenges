import { Dimensions } from 'react-native'

export const { 
    height,
    width
} = Dimensions.get('window')

export const defaultProps = {
    pageProps: {
        "White": "#FFFFFF",
        "Light": "EAEBED"
    }
}