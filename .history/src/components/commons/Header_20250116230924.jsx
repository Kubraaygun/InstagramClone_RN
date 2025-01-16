import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  ChevronLeft,
  Heart,
  IGLogo,
  Messages,
  Notification,
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
      {/* Eğer Feeds Sayfası açıksa */}
      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : // Feeds sayfası değilse ve kendi profil sayfamdaysam
      isMyProfile ? (
        <View>
          <Text>Kendi Profil Sayfam</Text>
        </View>
      ) : (
        // Başkasının profil sayfasındaysam
        <ChevronLeft />
      )}

      {screenName == routes.PROFILE_SCREEN && (
        <View style={styles.middleBox}>
          <Title text={'username'} theme={titleTypes.TEXT_16_700} />
          <VerifiedBadge />
        </View>
      )}

      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.rightBox}>
          <Heart />
          <Dot />
          <Messages />
          <Badge customStyle={styles.badge} value={'10'} />

          <AddFeeds />
        </View>
      ) : isMyProfile ? (
        <View></View>
      ) : (
        <View>
          <Notification />
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
