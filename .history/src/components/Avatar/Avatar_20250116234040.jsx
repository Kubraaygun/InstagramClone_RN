import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';

const Avatar = () => {
  return (
    <View>
      <StoryRing />
      <Image />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
