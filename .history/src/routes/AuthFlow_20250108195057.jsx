import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routes';
import SignInScreen from '../screens/AuthFlow/SignInScreen';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();
  const {SIGN_IN, SIGN_UP} = routes;
  return (
    <AuthFlowStack.Navigator>
      <AuthFlowStack.Screen name={SIGN_IN} component={SignInScreen} />
      <AuthFlowStack.Screen name={SIGN_UP} component={SignUpScreen} />
    </AuthFlowStack.Navigator>
  );
};

export default AuthFlow;

const styles = StyleSheet.create({});
