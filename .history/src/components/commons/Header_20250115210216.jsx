import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IGLogo} from '../../assets/icons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <IGLogo />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
