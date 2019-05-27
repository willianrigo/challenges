import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IconLabel from './src/components/Card/IconLabel'

export default class App extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <IconLabel name={"home"} type={"FontAwesome"}size={"Medium"} color={"Primary"}>Teste</IconLabel>
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
