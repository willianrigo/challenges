import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Label from './src/components/Card/Label'

export default class App extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <Label size={"Large"} color={"Primary"} weight={"Bold"}>Teste</Label>
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
