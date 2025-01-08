import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootNavigatior = () => {
  const RootNavigatorSctack = createNativeStackNavigator();
  return (
    <View>
      <Text>RootNavigatior</Text>
    </View>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({});
