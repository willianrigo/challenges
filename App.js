import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from './src/components/Card/Title'

export default class App extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <Title size={"Medium"} color={"Primary"} weight={"Bold"}>Teste</Title>
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
