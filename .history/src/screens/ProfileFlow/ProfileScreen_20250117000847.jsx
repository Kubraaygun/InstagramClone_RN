import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../../constants/routes';
import Header from '../../components/commons/Header';
import Avatar from '../../components/Avatar/Avatar';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      <View>
        <Avatar image={source} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
