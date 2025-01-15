import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../constants/colors';

const Dot = () => {
  return (
    <View style={styles.box}>
      <Text>Dot</Text>
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  box: {
    width: 5,
    height: 5,
    backgroundColor: color.RED,
    borderRadius: 50,
    bordderWidth: 1,
    borderColor: color.WHITE,
  },
});
