import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmP: '',
    };
  }

  Register = () => {
    if (this.state.password != this.state.confirmP) {
      alert("The Password and Confirm Password doesn't match!");
    } else {
      fetch('http://192.168.1.23:8080/register', {
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
          alert(json.message);
          if (json.message == 'Account registered successfully!')
            this.props.navigation.navigate('Login');
        })
        .catch(error => {
          console.error(error);
        });
      Keyboard.dismiss();
    }
  };

  toLogin = () => {
    this.props.navigation.navigate('Login'), Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <View style={{width: 300}}>
            <Text style={styles.text}>Username</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                keyboardType="visible-password"
                onChangeText={value => {
                  this.setState({username: value});
                }}
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                keyboardType="visible-password"
                onChangeText={value => {
                  this.setState({password: value});
                }}
              />
            </View>
            <Text style={styles.text}>Confirm Password</Text>
            <View style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                keyboardType="visible-password"
                onChangeText={value => {
                  this.setState({confirmP: value});
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonRegisterBox}
            onPress={() => {
              this.Register();
            }}>
            <Text style={styles.buttonRegisterText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toLogin}>
            <Text style={styles.buttonToLogin}>Already have an account?</Text>
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
  buttonRegisterBox: {
    marginTop: 40,
    height: 50,
    width: 100,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
  },
  buttonRegisterText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#9d504b',
  },
  buttonToLogin: {
    marginTop: 10,
    color: '#666666',
    fontFamily: 'Montserrat-Medium',
  },
});
