import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Frame6} from '../../assets/icons';

const PressableIcon = () => {
  return (
    <TouchableOpacity style={styles.box}>
      <Frame6 />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({});
