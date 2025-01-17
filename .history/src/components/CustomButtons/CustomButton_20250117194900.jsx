import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../CustomButtons/CustomButton.style';
const CustomButton = ({title, theme}) => {
  return (
    <TouchableOpacity style={styles[theme].background}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
