import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios';
import Main from './src/Screens/Main';
import ChosenCat from './src/Screens/ChosenCat';
import Favourites from './src/Screens/Favourites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers["x-api-key"] = "c8e9e444-da06-41c8-b094-581f2ccc1d5e";

const StackNavigator = () => {
  return (
       <Stack.Navigator> 
                 <Stack.Screen
                    name="Main"
                    options={{ headerShown: false }}
                    component={Main}
                 /> 
                  <Stack.Screen
                    name="ChosenCat"
                    options={{ headerShown: false }}
                    component={ChosenCat}
                 /> 
        </Stack.Navigator>
  )

}

export default function App() {
  return (
    
    <NavigationContainer>    
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <SimpleLineIcons name="home" size={24} color={color} />
              );
            } else if (route.name === 'Favourites') {
              return (
                <Feather name="heart" size={24} color={color} />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#5533EA',
        })}
        >
                 <Tab.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={StackNavigator}
                 /> 
                  <Tab.Screen
                    name="Favourites"
                    options={{ headerShown: false }}
                    component={Favourites}
                 /> 
      </Tab.Navigator>    
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
