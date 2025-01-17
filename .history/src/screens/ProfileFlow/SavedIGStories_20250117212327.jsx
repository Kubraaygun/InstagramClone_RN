import {StyleSheet, View, Text, FlatList} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import Avatar from '../../components/Avatar/Avatar';
import {colors} from '../../constants/colors';
import {storyList} from '../../constants/dummyData';

const SavedIGStories = () => {
  const renderItem = (storyDesc, storyImg}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Avatar image={storyImg} isSaved={true} />
        <Text style={styles.storyText}>{storyDesc}</Text>
      </View>
    );
  };
  return (
    <View style={styles.savedIGStoried}>
      <FlatList
        ItemSeparatorComponent={<View style={{width: 18}} />}
        showsHorizontalScrollIndicator={false}
        data={storyList}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
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
