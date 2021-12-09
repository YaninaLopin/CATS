import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import { getFavoriteCats } from '../api/getFavourites';
import { Breed } from '../types/breed';
import { useFocusEffect } from '@react-navigation/native';

interface IProps {
  navigation: any;
  route: {
    params: {    
    }
  }
}

// interface IParams {
//   breed: Breed,
//   title: string;
// }

export default function Favourites({navigation}: IProps) {

  
  
  const [favCats, setFavCats] = useState([]);

  const loadFavorites =  () => {
    getFavoriteCats()
      .then(favCats => setFavCats(favCats))
      .catch(error => console.log(error))
  }
  
  useEffect(() => {loadFavorites();
  }, [])

  useFocusEffect(loadFavorites);
  
    return (
      <SafeAreaView> 
      <ScrollView>
        <View style={styles.container}>
            {favCats.map(favCat => (
               <TouchableOpacity 
                  style={[styles.blockstyle, styles.shadow]}
                  key={favCat.id}>
                  <Image style={styles.picture} source={{ uri: favCat.image?.url}}/>
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