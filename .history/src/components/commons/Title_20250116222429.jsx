import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export const titleTypes = {
  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_16_700: 'TEXT_16_700',
};

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
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  }),

  TEXT_16_700: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '700',
  }),
};
