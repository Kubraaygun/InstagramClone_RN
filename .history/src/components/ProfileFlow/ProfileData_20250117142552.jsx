import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../commons/Title';

const ProfileData = ({value, title}) => {
  console.log('value', 'title');
  return (
    <View>
      <Title text={value} />
      <Title text={title} />
    </View>
  );
};

export default ProfileData;

const styles = StyleSheet.create({});
