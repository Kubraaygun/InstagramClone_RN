import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import Avatar from '../../components/Avatar/Avatar';

import {colors} from '../../constants/colors';

const SavedIGStories = () => {
  const renderItem = () => {
    return (
      <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
        <Avatar image={source} isSaved={true} />
        <Text style={styles.storyText}>Text Here</Text>
      </View>
    );
  };
  return <View style={styles.savedIGStoried}></View>;
};

export default SavedIGStories;

const styles = StyleSheet.create({
  savedIGStoried: {
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  storyText: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: -0.4,
  },
});
