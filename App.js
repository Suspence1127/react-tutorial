/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  linking,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.body}>
<Text style={styles.text}>Programming with Mash</Text>
<Button title='youtube channel' onPress={()=>{linking.openURL('https://youtube.com/')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    allignItems:'center',
    justifyContent:'center',
  },
  text:{
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});
 
export default App;
