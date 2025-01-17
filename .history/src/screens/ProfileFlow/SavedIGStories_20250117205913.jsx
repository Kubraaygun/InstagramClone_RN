import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';

const SavedIGStories = () => {
  return (
    <View>
      <Image
        style={{
          width: 55,
          height: 55,
          borderRadius: 100,
          borderWidth: 1,
        }}
        source={{uri: source}}
      />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
