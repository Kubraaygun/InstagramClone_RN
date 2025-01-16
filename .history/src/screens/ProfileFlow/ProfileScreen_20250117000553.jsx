import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../../constants/routes';
import Header from '../../components/commons/Header';
import Avatar from '../../components/Avatar/Avatar';
export const source =
  'https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P~Sar5l4etUwBbexalrT~Lq5cv8omY3WLSIZW-u7RZtRvwuQtKwpMM9mNI9saQ3r0SZinAIryxOLSpvuug9hbZHgDBkeiYmUDfta3xTyUuAiqbU8RJtKjhM9zuGvqcrRoqcuafO~-nhYnYbQ~HnNIa4HZZ6XNWPsAXHZB4vCHXxhuziTH4V0R7SKHbdsEqaHj2EEqXKS1PL0OQ8GdyfuxqJVP3PPYbMXgYZUEsId0RJ6HwymGW7Xo7dyc2R-2QwUOAGODLfsIepKvNbVdWyH7eyEpQT5qScBZppnvJN4qLjZOuv~w1iOlKDCUXa34L81ybvZlHlMFXFuxRz1-TZA7Q__';

const ProfileScreen = () => {
  return (
    <View>
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      <View>
        <Avatar />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
