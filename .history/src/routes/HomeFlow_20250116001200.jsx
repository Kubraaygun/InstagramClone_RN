import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostsScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();
  const {PROFILE_SCREEN, FEED_POSTS_SCREEN} = routes;

  return (
    <HomeFlowStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ProfileScreen">
      <HomeFlowStack.Screen
        name= {}
        component={FeedPostsScreen}
      />

      <HomeFlowStack.Screen name=component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};
export default HomeFlow;
