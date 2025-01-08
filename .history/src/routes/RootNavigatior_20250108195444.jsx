import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootNavigatior = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  return (
    <RootNavigatiorStack.Navigator>
      <RootNavigatiorStack.Screen name="Home" component={HomeScreen} />
      <RootNavigatiorStack.Screen name="Profile" component={ProfileScreen} />
    </RootNavigatiorStack.Navigator>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({});
