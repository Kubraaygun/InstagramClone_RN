import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();
  return (
    <AuthFlowStack.Navigator>
      <AuthFlowStack.Screen name="SignIn" component={SignInScreen} />
      <AuthFlowStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthFlowStack.Navigator>
  );
};

export default AuthFlow;

const styles = StyleSheet.create({});
