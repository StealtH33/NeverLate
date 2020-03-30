import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class Register extends Component {
  DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
  render() {
    return (
      <this.DismissKeyboard>
      <View style={styles.screen}>
        <View style={{width:300}}>
          <Text style={styles.text}>
            Username
          </Text>
          <View style={styles.textInputBox}>
            <TextInput 
              style = {styles.textInput}
              keyboardType = 'visible-password'
            />
          </View>
          <Text style={styles.text}>
            Password
          </Text>
          <View style={styles.textInputBox}>
            <TextInput
              style = {styles.textInput}
              keyboardType = 'visible-password'
            />
          </View>
          <Text style={styles.text}>
            Confirm Password
          </Text>
          <View style={styles.textInputBox}>
            <TextInput
              style = {styles.textInput}
              keyboardType = 'visible-password'
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonRegisterBox}
          onPress={()=>{this.props.navigation.navigate('Login')}}
        >
          <Text style={styles.buttonRegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
      </this.DismissKeyboard>
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
  text: {
    marginTop: 10,
    color: '#666666',
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
  },
  textInputBox: {
    borderRadius: 13,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#2b2b2b'
  },
  textInput:{
    color: '#9d504b',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20
  },
  buttonRegisterBox: {
    marginTop: 40,
    height: 50,
    width: 100,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2b2b'
 },
  buttonRegisterText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#9d504b'
  }
});