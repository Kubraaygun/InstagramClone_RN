import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {source} from './ProfileScreen';
import {colors} from '../../constants/colors';
import Avatar from '../../components/Avatar/Avatar';

const SavedIGStories = () => {
  return (
    <View>
      <Avatar image={source} isSaved={true} />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({});
