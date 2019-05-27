import { Dimensions } from 'react-native'

export const { 
    height,
    width
} = Dimensions.get('window')

export const defaultProps = {
    pageProps: {
        "White": "#FFFFFF",
        "Light": "EAEBED"
    },
    labelProps: {
        size: {
            "Large": 21,
            "Medium": 16,
            "Small": 14,
            "Nano": 12
        },
        color: {
            "Primary": "#8c388c",
            "Secondary": "333333",
            "Terciary": "#999999",
            "Negative": "#FFFFFF"
        },
        weight:{
            "Regular": 400,
            "Light": 300,
            "Bold": "bold"
        }
    }
}