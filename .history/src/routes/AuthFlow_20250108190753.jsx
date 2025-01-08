import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();
  return (
    <View>
      <Text>AuthFlow</Text>
    </View>
  );
};

export default AuthFlow;

const styles = StyleSheet.create({});
