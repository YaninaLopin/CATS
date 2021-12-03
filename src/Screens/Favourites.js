import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function Favourites({navigation}) {

  
    return (
      <View style={styles.container}>
        <Text>
            favorites
        </Text>
      </View>      
     
            
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F3F3F8',
      padding: 8,
    },
    
   
  });