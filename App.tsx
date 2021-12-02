import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './src/Screens/Main';
import ChosenCat from './src/Screens/ChosenCat';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>     
           <Stack.Navigator> 
                  <Stack.Screen
                    name="ChosenCat"
                    options={{ headerShown: false }}
                    component={ChosenCat}
                 /> 
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
