import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';

const SavedIGStories = () => {
  return (
    <View>
      <Image source={{uri: source}} />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
