import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CardButton from './src/components/Card/CardButton'
import IconLabel from './src/components/Card/IconLabel'
 
export default class App extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <CardButton type={'FAB'}>teste</CardButton>
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
