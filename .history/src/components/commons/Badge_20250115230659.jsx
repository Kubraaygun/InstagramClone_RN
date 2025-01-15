import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';
import Title from './Title';

const Badge = ({value}) => {
  return (
    <View style={styles.badge}>
      <Title theme="TEXT_12_400_18" text={'10+'} />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 4,
    backgroundColor: color.RED,
    borderRadius: 10,
  },
  badgeText: {
    color: color.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
});
