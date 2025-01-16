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
      {/* Eger Feeds Sayfasi aciksa */}
      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : // Feeds sayfasi degilse ve kendim profil sayfamdaysam girecek kosul
      isMyProfile ? (
        <View>
          <Text>Kendi Profil Sayfam</Text>
        </View>
      ) : (
        //Baskasinn profil sayfasindaysam girecek kosul
        <ChevronLeft />
      )}
      {/* Profil Ekranindaysa ve baskasinin profiliyse girecek kosul */}
      {screenName == routes.PROFILE_SCREEN && isMyProfile === false && (
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
        <View style={styles.rightBox}>
          <AddFeeds />
          <Drawer />
        </View>
      ) : (
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
