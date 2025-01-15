import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChevronDown, Heart, IGLogo} from '../../assets/icons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <IGLogo />
        <ChevronDown />
        <Heart />
        <Messages />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
