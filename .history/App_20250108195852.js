//import liraries
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigatior from './src/routes/RootNavigatior';
import {NavigationContainer} from '@react-navigation/native';

// create a component
const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <RootNavigatior />
      </NavigationContainer>
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;

// define your styles
const styles = StyleSheet.create({});
