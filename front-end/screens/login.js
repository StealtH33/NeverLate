import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  Login = () => {
    fetch('http://192.168.1.23:8080/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.message == 'Connected') this.props.navigation.navigate('Home');
        else alert(json.message);
      })
      .catch(error => {
        console.error(error);
      });
    Keyboard.dismiss();
  };

  toRegister = () => {
    this.props.navigation.navigate('Register'), Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <Image source={require('../assets/images/logo.png')} />
          <View style={{ width: 300 }}>
            <Text style={styles.text}>Username</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                keyboardType="visible-password"
                onChangeText={value => {
                  this.setState({ username: value });
                }}
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({ password: value });
                }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonLoginBox} onPress={this.Login}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toRegister}>
            <Text style={styles.buttonToRegister}>
              Don't have an account? Register here!
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
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
    backgroundColor: '#2b2b2b',
  },
  textInput: {
    color: '#9d504b',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
  },
  buttonLoginBox: {
    marginTop: 40,
    height: 50,
    width: 100,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
  },
  buttonLoginText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#9d504b',
  },
  buttonToRegister: {
    marginTop: 10,
    color: '#666666',
    fontFamily: 'Montserrat-Medium',
  },
});
