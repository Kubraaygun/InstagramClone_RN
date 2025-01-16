import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../../constants/routes';
import Header from '../../components/commons/Header';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';

export const source =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOPH8IcoWp3KC21raLvC_9Xt4QC9kNusEhg&s';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      <View>
        <Avatar image={source} />

        <View>
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'1,234'} title={'Posts'} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
