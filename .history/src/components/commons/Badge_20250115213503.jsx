import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';

const Badge = ({value}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    padding: 4,
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
