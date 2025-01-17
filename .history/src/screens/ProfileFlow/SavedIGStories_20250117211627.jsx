import {StyleSheet, View, Text, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {storyList} from '../../constants/dummyData';

const SavedIGStories = () => {
  const renderItem = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}></View>
    );
  };
  return (
    <View style={styles.savedIGStories}>
      <FlatList data={storyList} renderItem={renderItem} horizontal />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({
  savedIGStories: {
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
