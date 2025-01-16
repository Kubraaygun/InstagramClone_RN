import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  ChevronLeft,
  Drawer,
  Heart,
  IGLogo,
  Messages,
  Notification,
  Options,
  VerifiedBadge,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import {routes} from '../../constants/routes';
import Title, {titleTypes} from './Title';

const Header = ({screenName, isMyProfile}) => {
  const {FEED_POSTS_SCREEN} = routes;
  return (
    <View style={styles.header}>
      {/* If the Feeds Page is open */}
      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : // If it is not a feeds page and my name is on my profile page, the condition is
      isMyProfile ? (
        <View>
          <Title text={'My Profile'} theme={titleTypes.TEXT_22_700_40} />
          <Badge value={10} />
        </View>
      ) : (
        // Conditions to enter if I am on someone else's profile page
        <ChevronLeft />
      )}
      {/* If it is a profile screen and someone else's profile is entered, the condition */}
      {screenName == routes.PROFILE_SCREEN && isMyProfile === false && (
        <View style={styles.middleBox}>
          <Title text={'username'} theme={titleTypes.TEXT_16_700} />
          <VerifiedBadge />
        </View>
      )}
      {/* If it is on the feed screen, the screen to enter is */}
      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.rightBox}>
          <Heart />
          <Dot />
          <Messages />
          <Badge customStyle={styles.badge} value={'10'} />

          <AddFeeds />
        </View>
      ) : // If I'm on my own profile
      isMyProfile ? (
        <View style={styles.rightBox}>
          <AddFeeds />
          <Drawer />
        </View>
      ) : (
        // If I'm on someone else's profile
        <View style={styles.rightBox}>
          <Notification />
          <Options />
        </View>
      )}
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
    alignItems: 'flex-start',
    gap: 8,
  },
  middleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  badge: {
    position: 'absolute',
    left: 66,
    top: -3,
    zIndex: 1000,
  },
});
