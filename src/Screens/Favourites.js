import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

export default function Favourites({navigation}) {
  axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
  axios.defaults.headers["x-api-key"] = "c8e9e444-da06-41c8-b094-581f2ccc1d5e";  
  
  const [favCats, setFavCats] = useState([]);

  const getFavoriteCats = () => {
    axios.get('favourites')
    .then(function (response) {
      const favCats = response.data;
        console.log('favCats', favCats);
        setFavCats(favCats);
      console.log('RESPONSE', response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });}
  
    useEffect(() => {
      getFavoriteCats();
    }, [])
 
  
    return (
      <SafeAreaView> 
      <ScrollView>
        <View style={styles.container}>
            {favCats.map(favCat => (
               <TouchableOpacity 
                  style={[styles.blockstyle, styles.shadow]}>
                   <Image style={styles.picture} source={{ uri: favCat.image?.url}} />
                   {/* <Text> {favCat.id} </Text>  */}
               </TouchableOpacity>
            ))}

        </View>
        </ScrollView>  
      </SafeAreaView> 
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
    
    blockstyle: {
        flexDirection: 'row',
        height: 318,
        marginTop: 25,
        marginLeft: 25,
        width: 326,
        backgroundColor: '#F5F5FA',
        borderRadius: 16,

      },
    
       shadow: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2.84,
      },
   
      picture:{
         height: 318,
         width: 326,
         borderRadius:16,
      }, 
   
  });