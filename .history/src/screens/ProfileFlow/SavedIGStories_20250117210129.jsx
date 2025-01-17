import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import {colors} from '../../constants/colors';

const SavedIGStories = () => {
  return (
    <View style={{}}>
      <Image
        style={{
          borderRadius: 100,
          padding: 3,
          borderWidth: 1,
          borderColor: colors.DARK_GRAY,
          width: 55,
          height: 55,
        }}
        source={{uri: source}}
      />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
