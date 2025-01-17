import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import {colors} from '../../constants/colors';

const SavedIGStories = () => {
  return (
    <View>
      <Image
        style={{
          width: 55,
          height: 55,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: colors.DARK_GRAY,
          padding: 3,
        }}
        source={{uri: source}}
      />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
