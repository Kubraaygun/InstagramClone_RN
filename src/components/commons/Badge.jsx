import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';
import Title from './Title';
import normalize from '../../utils/responsiveFunction';

const Badge = ({value}) => {
  return (
    <View style={styles.badge}>
      <Title theme="TEXT_12_400_18" text={value} />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: normalize(4),
    backgroundColor: color.RED,
    borderRadius: normalize(10),
  },
});
