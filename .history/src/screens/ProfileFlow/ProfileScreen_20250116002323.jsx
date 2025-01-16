import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {routes} from '../../constants/routes';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
