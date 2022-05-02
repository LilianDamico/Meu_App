import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MyComponent from './MyComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Hello World!!</Text>
      <Text style={styles.subTitle}>It is just to give a Good Luck!</Text>

      <ScrollView>
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />

      
      </ScrollView> 


      
      
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CDAA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#fff',
    fontSize: 24,
    padding: 15,
  },
  subTitle: {
    color: '#fff',
    fontSize: 22,
    padding: 15,
  }
});