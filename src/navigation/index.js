import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import SplashScreen from '../screens';
import CartScreen from '../screens/CartScreen';
import SecondHomeScreen from '../screens/SecondHomeScreen';
import ShoppingCartIcon from '../../ShoppingCartIcon';
import CartCheckoutScreen from '../screens/CartCheckoutScreen';
import GeolocationScreen from '../screens/GeolocationScreen';
import { Auth, Hub } from 'aws-amplify';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    }
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, [])

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Group>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SecondHomeScreen" component={SecondHomeScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="CartCheckoutScreen" component={CartCheckoutScreen} />
            <Stack.Screen name="GeolocationScreen" component={GeolocationScreen} />
          </Stack.Group>
        ) : (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />

            <Stack.Screen name="ShoppingCartIcon" component={ShoppingCartIcon} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;