import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import axios from 'axios';
import { Breed } from '../types/breed';
import {getNewImage} from '../api/randompicture';
import { addToFavorites } from '../api/addToFavourites';
import { Ionicons } from '@expo/vector-icons'; 

interface INavigation {
  navigation: any;
}

interface IRoute<T> {
  route: {
    params: T
  }
}

interface IParams {
  breed: Breed,
  title: string;
}

interface IProps extends INavigation, IRoute<IParams> {};

type BreedList = Breed[];

const sum = (a: number, b:number):number => {
  return a + b;
}

export default function ChosenCat({navigation,route}: IProps) {
  const t = sum(4,5);
  const { breed } = route.params;
  const [image, setImage] = useState(breed.image);


  const changeImage = async () => {
     const imageNew= await getNewImage(breed.id);
     if (imageNew) {setImage(imageNew)}
  }
  
  const addFavorite = () => {
    addToFavorites(image.id);
  };

    return (
 
      <View style={styles.container}>
        <TouchableOpacity 
            style={[styles.button,styles.shadow]}    
            onPress={() => navigation.goBack()}> 
            {/* <Image style={{width:10, height:10}} source={require('../../pictures/Icon.png')} /> */}
            <Ionicons name="chevron-back" size={24} color="#5533EA" />
        </TouchableOpacity>

        <Image style={styles.image} source={{ uri: image.url}} />

        <Text style ={styles.header}> {breed.name}</Text> 
                       <Text style ={styles.textstyle}> 
                           {breed.description}
                       </Text>
      <View style={styles.buttoncointainer}>
          
      <TouchableOpacity 
           style={styles.button1}
           onPress={() => changeImage()}> 
          <Text style={styles.buttontext}>Другое фото</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button2}
          onPress={() => addFavorite()}> 
          <Text style={styles.buttontext}>Добавить в избранное</Text>
      </TouchableOpacity>

      </View>
      </View>      
     
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F8',
      padding: 8,
    },
    buttoncointainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
    },
    image: {
      width: 317,
      height: 288,
      marginLeft: 23,
      marginTop: 73,
      borderRadius: 16,  
    },
    button: {
      width: 44,
      height: 44,
      marginLeft: 23,
      marginTop:56,
      borderRadius: 44, 
      backgroundColor:'white', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    button1: {
      width: 121,
      height: 40,
      marginTop:35,
      borderRadius: 12, 
      backgroundColor:'#FFFFFF', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    button2: {
      width: 183,
      height: 40,
      marginLeft: 14,
      marginTop:35,
      borderRadius: 12, 
      backgroundColor:'#FFFFFF', 
      justifyContent: 'center',
      alignItems: 'center',
    },

    header: {
      fontSize: 20,
      fontWeight: "700",
      marginLeft:31,
      marginTop: 43,
      color: '#333333'
      
     },
     textstyle: {
      fontSize: 14,
      fontWeight: "500",
      marginTop:31,
      marginLeft: 31,
      color: '#4F4F4F'
     },
     buttontext: {
      fontSize: 14,
      fontWeight: "800",
      color: '#5533EA'
     },
     shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.7,
      shadowRadius: 0.84,
    },
  });