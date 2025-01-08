import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen name="HomeFlow" component={HomeFlow} />
      <BottomTabsNavigator.Screen name="Profile" component={SearchScreen} />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
