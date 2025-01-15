import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, colors} from '../../constants/colors';
import Title from './Title';
import normalize from '../../utils/responsiveFunction';

const Badge = ({value, customStyle}) => {
  return (
    <View style={[styles.badge, customStyle]}>
      <Title theme="TEXT_12_400_18" text={value} />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: normalize(4),
    backgroundColor: colors.RED,
    borderRadius: normalize(10),
  },
});
