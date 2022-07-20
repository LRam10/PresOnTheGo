/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import NavMenu from './src/components/NavMenu';
import Listing from './src/components/Listing';
const App=() => {

  return (
    <>
    <SafeAreaView style={styles.container}>
     <NavMenu/>
     <Listing/>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingTop: StatusBar.currentHeight
  }
});

export default App;
