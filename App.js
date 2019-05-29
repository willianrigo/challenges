import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thumb from './src/components/Card/Thumb'
import CardButton from './src/components/Card/CardButton'
import CardHeader from './src/components/Card/CardHeader'
import Title from './src/components/Card/Title'

export default class App extends React.Component {
  

  render() {

    return (
      <View style={styles.container}>

        <CardHeader 
         headerThumb={Thumb}
         headerButton={CardButton} 
         headerTitle={Title} 
        />

        {/* <Thumb></Thumb> */}
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
