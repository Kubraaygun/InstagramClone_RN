import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

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
    width: 10,
    height: 10,
    backgroundColor: colors.RED,
    borderRadius: 99,
    bordderWidth: 2,
    borderColor: colors.WHITE,
    position: 'absolute',
    left: 20,
    top: 3,
    zIndex: 1000,
  },
});
