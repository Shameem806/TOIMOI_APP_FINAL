/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, StyleSheet} from 'react-native';
 import Navigation from './src/navigation';
 import {Provider} from 'react-redux';
 import store from './store';
 import Amplify from 'aws-amplify';

 import config from './src/aws-exports';
 import CookieManager from 'react-native-cookies'
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 const client = async () => {
   await CookieManager.clearAll() //clearing cookies stored 
                                        //natively before each 
                                        //request
   const cookie = await AsyncStorage.getItem('cookie')
   return await fetch('api/data', {
     headers: {
       'cookie': cookie
      }
    })
 }
 
 Amplify.configure(config);

class App extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
         <Navigation /> 
      </Provider>
    </SafeAreaView>
  );
  }
};
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#f7a8a0',
   },
 });
 
 const signUpConfig = {
   header: "My Customized Sign Up",
   hideAllDefaults: true,
   signUpFields: [
     {
       label: "Full name",
       key: "name",
       required: true,
       displayOrder: 1,
       type: "string",
     },
     {
       label: "Email",
       key: "email",
       required: true,
       displayOrder: 2,
       type: "string",
     },
     {
       label: "Username",
       key: "preferred_username",
       required: true,
       displayOrder: 3,
       type: "string",
     },
     {
       label: "Password",
       key: "password",
       required: true,
       displayOrder: 4,
       type: "password",
     },
   ],
 };

 export default App;
  