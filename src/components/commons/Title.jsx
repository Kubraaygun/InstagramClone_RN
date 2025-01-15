import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';

const Title = ({theme = 'TEXT_12_400_18', text}) => {
  return (
    <View>
      <Text style={styles[theme]}>{text}</Text>
    </View>
  );
};

export default Title;

export const styles = {
  TEXT_12_400_18: StyleSheet.create({
    color: color.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  }),
};
