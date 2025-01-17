import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';
export const source =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOPH8IcoWp3KC21raLvC_9Xt4QC9kNusEhg&s';

const Avatar = ({image, isSaved}) => {
  return (
    <View style={styles.avatar}>
      <StoryRing />
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 9999,
    position: 'absolute',
  },
});
