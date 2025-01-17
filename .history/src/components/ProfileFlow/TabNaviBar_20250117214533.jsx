import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabNaviBar = () => {
  return (
    <View>
  {
            tabList={tabList}
            activeBar={activeTab}
            setActiveBar={setActiveTab}
  }
    </View>
  );
};

export default TabNaviBar;

const styles = StyleSheet.create({});
