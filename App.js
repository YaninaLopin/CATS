import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
    return (
     
        <NavigationContainer>
            return (
      <Stack.Navigator> 
        
    
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={ListClients}
        />
        </Stack.Navigator>
        </NavigationContainer>
    
    );
  }