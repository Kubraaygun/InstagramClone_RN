import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';
export const source =
  'https://www.wpdurum.com/uploads/thumbs/en-guzel-profil-resmi.jpg';

const Avatar = () => {
  return (
    <View>
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

const styles = StyleSheet.create({});
