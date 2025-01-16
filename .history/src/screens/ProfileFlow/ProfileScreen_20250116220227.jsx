import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../../constants/routes';
import Header from '../../components/commons/Header';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={false} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
