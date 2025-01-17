import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TabNaviBar = ({tabList, activeBar, setActiveBar}) => {
  return (
    <View>
      {tabList.map((item, index) => (
        <TouchableOpacity key={item} onPress={setActiveBar(index)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabNaviBar;

const styles = StyleSheet.create({});
