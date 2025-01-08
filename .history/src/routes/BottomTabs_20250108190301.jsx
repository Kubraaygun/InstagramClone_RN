import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import {routes} from '../constants/routes';
import MarketScreen from '../screens/MarketFlow/MarketScreen';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  const {HOME_FLOW, SEARCH_FLOW, MARKET_FLOW, REELS_FLOW, PROFILE_FLOW} =
    routes;
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen
        name={routes.HOME_FLOW}
        component={HomeFlow}
      />
      <BottomTabsNavigator.Screen
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.MARKET_FLOW}
        component={MarketScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
