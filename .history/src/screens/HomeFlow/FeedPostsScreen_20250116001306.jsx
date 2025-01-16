import {View, Text} from 'react-native';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routes';

const FeedPostsScreen = () => {
  return (
    <View>
      <Header screenName={routes.FEED_POSTS_SCREEN} />
      <Text>Post Sayfasi</Text>
    </View>
  );
};

export default FeedPostsScreen;
