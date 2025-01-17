import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TabNaviBar = ({tabList, activeBar, setActiveBar}) => {
  console.log(tabList, activeBar, setActiveBar);
  return (
    <View>
      {tabList.map((item, index) => (
        <TouchableOpacity></TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNaviBar;

const styles = StyleSheet.create({});
