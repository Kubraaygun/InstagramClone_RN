import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../../constants/routes';
import Header from '../../components/commons/Header';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import {colors} from '../../constants/colors';
import CustomButton from '../../components/CustomButtons/CustomButton';

export const source =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOPH8IcoWp3KC21raLvC_9Xt4QC9kNusEhg&s';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      <View style={styles.userProfileData}>
        <Avatar image={source} />

        <View style={styles.data}>
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'5,678'} title={'Folloers'} />
          <ProfileData value={'9,101'} title={'Following'} />
        </View>
      </View>
      <View style={styles.userNameAndInfo}>
        <View>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.category}>Category/Genre Test</Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
          <Text style={styles.link}>Link goes here</Text>
        </View>
        <View style={styles.followers}>
          <View style={styles.friends}>
            <Image source={{uri: source}} style={styles.friendsImage} />

            <Image
              source={{uri: source}}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 13,
                  zIndex: -1,
                },
              ]}
            />

            <Image
              source={{uri: source}}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 26,
                  zIndex: -2,
                },
              ]}
            />
          </View>

          <View style={styles.followersRight}>
            <Text style={styles.followed}>Followed by </Text>
            <Text style={styles.boldFollowed}>username </Text>
            <Text style={styles.boldFollowed}>username </Text>
            <Text style={styles.followed}>and </Text>
            <Text style={styles.boldFollowed}>100 others </Text>
          </View>
        </View>
        <CustomButton />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userProfileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 12,
  },
  data: {
    flexDirection: 'row',
    gap: 24,
  },
  userName: {
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '700',
  },
  category: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.NEUTRAL,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  link: {
    color: colors.DARKBLUE,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  userNameAndInfo: {
    padding: 6,
    paddingHorizontal: 12,
    paddingBottom: 10,
    gap: 12,
  },
  friends: {
    flexDirection: 'row',
    width: 54,
  },
  friendsImage: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: colors.WHITE,
  },
  followers: {
    flexDirection: 'row',
    paddingBottom: 10,
    gap: 12,
  },
  followersRight: {
    flexDirection: 'row',
  },
  followed: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  boldFollowed: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
});
