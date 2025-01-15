import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
    backgroundColor: 'black',
  },
});
