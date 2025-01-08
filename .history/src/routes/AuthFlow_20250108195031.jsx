import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routes';

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
