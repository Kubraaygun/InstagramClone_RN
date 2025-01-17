import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default {
  primary: StyleSheet.create({
    background: {
      backgroundColor: colors.BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
    },
    text: {
      fontSize: 13,
      fontWeight: '700',
      lineHeight: 16,
      color: colors.WHITE,
    },
  }),

  outline: StyleSheet.create({
    background: {
      backgroundColor: colors.GRAY,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: colors.GRAY,
      flex: 1,
    },
    text: {
      fontSize: 13,
      fontWeight: '700',
      lineHeight: 16,
      color: colors.BLACK,
    },
  }),
};
