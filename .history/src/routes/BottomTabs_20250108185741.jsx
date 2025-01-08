import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
