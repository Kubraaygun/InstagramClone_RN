import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';
export const source =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOPH8IcoWp3KC21raLvC_9Xt4QC9kNusEhg&s';

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <StoryRing />
      <View style={{width: 75, height: 75, borderRadius: 94329}}>
        <Image
          height={75}
          width={75}
          source={{
            uri: source,
          }}
        />
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
