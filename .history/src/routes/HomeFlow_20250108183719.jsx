import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostsScreen';
import ProfileScreen from '../screens/CommonScreens/ProfileScreen';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();

  return (
    <HomeFlowStack.Navigator>
      <HomeFlowStack.Screen
        name="FeedPostsScreen"
        component={FeedPostsScreen}
      />

      <HomeFlowStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};
