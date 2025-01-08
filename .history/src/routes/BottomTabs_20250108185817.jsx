import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen name="HomeFlow" component={HomeFlow} />
      <BottomTabsNavigator.Screen name="Profile" component={ProfileScreen} />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
