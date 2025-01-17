import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import Avatar from '../../components/Avatar/Avatar';

import {colors} from '../../constants/colors';

const SavedIGStories = () => {
  return (
    <View style={styles.savedIGStoried}>
      <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
        <Avatar image={source} isSaved={true} />
        <Text style={styles.storyText}>Text Here</Text>
      </View>
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({
  savedIGStoried: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  storyText: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: -0.4,
  },
});
