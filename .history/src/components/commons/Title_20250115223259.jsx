import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';

const Title = ({theme = 'default'}) => {
  return (
    <View>
      <Text style={styles[theme]}>10 +</Text>
    </View>
  );
};

export default Title;

export const styles = {
  default: StyleSheet.create({
    color: color.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  }),
  default: StyleSheet.create({
    color: color.RED,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  }),
};
