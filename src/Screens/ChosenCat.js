import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function ChosenCat({navigation,route}) {
  const { breed } = route.params;
  const [image, setImage] = useState(breed.image);
  
  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  axios.defaults.headers["x-api-key"] = "c8e9e444-da06-41c8-b094-581f2ccc1d5e";  

   const addToFavorites = async () => {
    try {
      const response = await axios.post(`favourites`, {
        image_id: image.id,
      });
      const data = response.data;
     // console.log('data', data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewImage = async () => {
    try {
      const response = await axios.get(
        `images/search?breed_id=${breed.id}&include_breeds=false`
      );
      const newcats = response.data;
     // console.log('newcats', newcats);
      if (newcats.length > 0) {
       // console.log(breeds[0]);
        setImage(newcats[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // useEffect(() => {
  //   getNewImage();
  // }, [])

    return (
 
      <View style={styles.container}>
        <TouchableOpacity 
            style={[styles.button,styles.shadow]}    
            onPress={() => navigation.goBack()}> 
            <Image style={{width:10, height:10}} source={{ uri:'/Users/yaninarekut/Desktop/Projects/CATS/pictures/Icon.png'}} />
        </TouchableOpacity>

        <Image style={styles.image} source={{ uri: image.url}} />

        <Text style ={styles.header}> {breed.name}</Text> 
                       <Text style ={styles.textstyle}> 
                         {`Taking care of a pet is my favorite, it helps 
me to...`}
                       </Text>
      <View style={styles.buttoncointainer}>
          
      <TouchableOpacity 
           style={styles.button1}
           onPress={() => getNewImage()}> 
          <Text style={styles.buttontext}>Другое фото</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button2}
          onPress={() => addToFavorites()}> 
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
     // marginLeft: 10,
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
    buttontext: {
      fontSize:24,
      fontWeight:"600",
      color: '#5533EA'
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