import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={{color: 'white'}}>Homescreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a'
 },
});