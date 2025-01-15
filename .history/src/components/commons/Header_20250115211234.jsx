import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftBox}>
        <IGLogo />
        <ChevronDown />
        <Heart />
        <Messages />
        <AddFeeds />
      </View>
      <View style={styles.rightBox}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
