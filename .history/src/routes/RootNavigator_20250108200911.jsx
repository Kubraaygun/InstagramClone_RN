import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routes';
import BottomTabs from './BottomTabs';
import AuthFlow from './AuthFlow';

const RootNavigator = () => {
  const RootNavigatorStack = createNativeStackNavigator();
  const {AUTH_FLOW, MAIN_FLOW} = routes;
  return (
    <RootNavigatorStack.Navigator>
      <RootNavigatorStack.Screen name={AUTH_FLOW} component={AuthFlow} />
      <RootNavigatorStack.Screen name={MAIN_FLOW} component={BottomTabs} />
    </RootNavigatorStack.Navigator>
  );
};

export default RootNavigator;
