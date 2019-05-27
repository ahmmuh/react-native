import React, { Component } from 'react'
import {StyleSheet, Image, TextInput, TouchableOpacity, Text, View} from 'react-native';

export class Login extends Component {
  static navigationOptions ={
    title: 'Login'
  }
  render() {
    return (
      <View style={styles.loginContainer}>
      <Image source={require('../images/register.jpeg')}
      style={styles.welcomeImage}/>
          <Text style={styles.welcome}>Welcome to Codemill Classics</Text>
          <TextInput
            style={styles.userInput}
            placeholder="Username"
            placeholderTextColor="#fff"
          />
           <TextInput
          label='username' style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}

          />
          <TouchableOpacity style={styles.loginButton}>
              <Text style={{color: '#fff', padding: 5, textAlign: 'center', fontSize: 20}}
           onPress={() => this.props.navigation.navigate('Home')}
                        >Login</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
    userInput:{
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        borderRadius: 20,
        margin: 4,
        padding: 8,
        color: '#fff',
        fontSize: 18
    },
    passwordInput:{
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        borderRadius: 20,
        padding: 8,
        color: '#fff',
        fontSize: 18
    },
    loginButton:{
        margin: 4,
        backgroundColor: 'green',
        color: '#fff',
        fontSize: 23,
        width: '50%',
        height: 40,
        borderRadius: 20,
    },
    welcome:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'normal',
        paddingTop: -100,
    },
    welcomeImage:{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }
})
export default Login
