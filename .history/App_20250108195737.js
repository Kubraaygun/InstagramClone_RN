//import liraries
import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import RootNavigatior from './src/routes/RootNavigatior';

// create a component
const App = () => {
  return (
    <SafeAreaView>
      <RootNavigatior />
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;

// define your styles
const styles = StyleSheet.create({});
