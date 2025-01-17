import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default {
  primary: StyleSheet.create({
    background: {
      backgroundColor: colors.BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 5,
    },
  }),
};
