/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/AlrenoAndroid/src/Navigations/StackNavigators';
import {LogBox} from 'react-native';
import codePush from 'react-native-code-push';
const App = () => {
  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <NavigationContainer>
        <StackNavigators />
      </NavigationContainer>
      {/* <Text>Hello</Text> */}
    </>
  );
};

// const styles = StyleSheet.create({});

export default codePush(App);
