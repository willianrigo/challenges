import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Card from './components/Card';
import Page from './components/Page/Page'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Page></Page>
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
