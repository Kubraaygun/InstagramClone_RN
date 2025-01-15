import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Badge = ({value}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
