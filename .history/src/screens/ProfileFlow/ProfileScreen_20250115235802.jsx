import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from 'react-native/Libraries/NewAppScreen';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={'ProfileScreen'} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
