import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import {routes} from '../../constants/routes';
const Header = ({screenName, isMyProfile}) => {
  const {FEED_POSTS_SCREEN} = routes;
  return (
    <View style={styles.header}>
      {screenName === FEED_POSTS_SCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : isMyProfile ? (
        <View>
          <Text>Kendi Profil Sayfam</Text>
        </View>
      ) : (
        <View>
          <Text>Baskasi</Text>
        </View>
      )}

      <View style={styles.rightBox}>
        <Heart />
        <Dot />
        <Messages />
        <Badge customStyle={styles.badge} value={'10'} />

        <AddFeeds />
      </View>
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
