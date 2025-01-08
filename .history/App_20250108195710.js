//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootNavigatior from './src/routes/RootNavigatior';

// create a component
const App = () => {
  return (
    <SafeaAreaView>
      <RootNavigatior />
    </SafeaAreaView>
  );
};

//make this component available to the app
export default App;

// define your styles
const styles = StyleSheet.create({});
