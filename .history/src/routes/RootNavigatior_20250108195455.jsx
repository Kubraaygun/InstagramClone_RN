import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootNavigatior = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  return (
    <RootNavigatorStack.Navigator>
      <RootNavigatorStack.Screen name="Home" component={HomeScreen} />
      <RootNavigatorStack.Screen name="Profile" component={ProfileScreen} />
    </RootNavigatorStack.Navigator>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({});
