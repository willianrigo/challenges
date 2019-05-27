import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Thumb from './src/components/Card/Thumb'
 
export default class App extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <Thumb></Thumb>
        {/* <IconLabel size="Large" name="Home" type="FontAwesome"></IconLabel> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 12
  },
});
