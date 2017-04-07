import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initialiseApp({
      apiKey: 'AIzaSyCbvpguI5Pdde1SMgVUohTLkuzdYSRq-Mk',
      authDomain: 'authentication-1bc3c.firebaseapp.com',
      databaseURL: 'https://authentication-1bc3c.firebaseio.com',
      projectId: 'authentication-1bc3c',
      storageBucket: 'authentication-1bc3c.appspot.com',
      messagingSenderId: '666204528758'
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App!</Text>
      </View>
    );
  }
}

export default App;
