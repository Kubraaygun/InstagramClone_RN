import {View, Text} from 'react-native';
import Header from '../../components/commons/Header';

const FeedPostsScreen = () => {
  return (
    <View>
      <Header screenName={FeedPostsScreen} />
      <Text>Post Sayfasi</Text>
    </View>
  );
};

export default FeedPostsScreen;
