import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();

  return (
    <HomeFlowStack.Navigator>
      <HomeFlowStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeFlowStack.Screen
        name="FeedPostsScreen"
        component={FeedPostsScreen}
      />
      <HomeFlowStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};
