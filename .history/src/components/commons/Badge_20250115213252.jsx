import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Badge = ({value}) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
