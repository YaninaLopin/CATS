import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

import { Breed } from '../types/breed';

interface IProps {
  navigation: any;
  route: {
    params: {
      
    }
  }
}
// сделать api в отдельных файлах
// обновление favorites

export default function Main({navigation, route}:  IProps) {
    const [breeds, setBreeds] = useState<Breed[]>([]);

    const getBreads = async () => {
      try {
        const response = await axios.get('breeds');
        const breeds = response.data;
        //console.log('breeds', breeds);
        setBreeds(breeds);
      } catch (error) {
        console.log(error);
      } 
    }
  
    const getPromisedBreeds = () => {
    axios.get('breeds')
    .then(function (response) {
      // handle success
      const breeds = response.data;
        //console.log('breeds', breeds);
        setBreeds(breeds);
      //console.log('RESPONSE', response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });}
  
    useEffect(() => {
      getPromisedBreeds();
    }, [])
  
    return (
      <SafeAreaView> 
      <ScrollView>
        
        <View style={styles.container}>
            {breeds.map(breed => (
               <TouchableOpacity 
                  style={[styles.blockstyle, styles.shadow]}   
                  onPress={() => navigation.navigate('ChosenCat',{breed})}
                  key = {breed.id}
               >
                   <Image style={styles.picture} source={{ uri: breed.image?.url}} />
                   <View style={styles.textblock}>
                      <Text style ={styles.header}> {breed.name}</Text> 
                       <Text style ={styles.textstyle}> 
                         {breed.description.substring(0,80)}  ... 
                       </Text>
                   </View>
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
        height: 130,
        marginTop: 25,
        marginHorizontal: 20,
        width: "auto",
        backgroundColor: '#F5F5FA',
        borderRadius: 16,
      },
    
      textblock: {
        flex:1,
      },
    
       header: {
        fontSize: 20,
        fontWeight: "700",
        marginTop:16,
        color: '#333333'
        
       },
       textstyle: {
        fontSize: 14,
        fontWeight: "500",
        marginTop:10,
        marginLeft: 5,
        color: '#4F4F4F'
        
       },
       shadow: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.7,
        shadowRadius: 1.84,
      },
   
      picture:{
         marginTop:1, 
         marginLeft:5,
         height: 128,
         width: 130,
         borderRadius:8,
      }, 
     
  });