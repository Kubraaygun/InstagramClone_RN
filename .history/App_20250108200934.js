//import liraries
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;

// define your styles
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
