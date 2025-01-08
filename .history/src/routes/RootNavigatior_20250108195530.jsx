import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootNavigatior = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  const {AUTH_FLOW, HOME_FLOW} = ROUTE_NAMES;
  return (
    <RootNavigatorStack.Navigator>
      <RootNavigatorStack.Screen name={} component={HomeScreen} />
      <RootNavigatorStack.Screen name="Profile" component={ProfileScreen} />
    </RootNavigatorStack.Navigator>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({});
