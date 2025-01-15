import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftBox}>
        <IGLogo />
        <ChevronDown />
      </View>
      <View style={styles.rightBox}>
        <Heart />
        <Dot />
        <Messages />
        <Badge customStyle={styles.badge} value={'10'} />

        <AddFeeds />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  badge: {position: 'absolute', left: 66, top: -3, zIndex: 1000},
});
