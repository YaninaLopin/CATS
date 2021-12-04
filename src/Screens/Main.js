import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

export default function Main({navigation, route}) {
    const [breeds, setBreeds] = useState([]);

    const getBreads = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        const breeds = response.data;
        //console.log('breeds', breeds);
        setBreeds(breeds);
      } catch (error) {
        console.log(error);
      } 
    }
  
    const getPromisedBreeds = () => {
    axios.get('https://api.thecatapi.com/v1/breeds')
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
               >
                   <Image style={styles.picture} source={{ uri: breed.image?.url}} />
                   <View style={{flexDirection: 'column'}}>
                      <Text style ={styles.header}> {breed.name}</Text> 
                       <Text style ={styles.textstyle}> 
                         {`Taking care of a pet is my 
favorite, it helps me to...`}
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
        marginLeft: 25,
        width: 327,
        backgroundColor: '#F5F5FA',
        borderRadius: 16,

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
        marginTop:30,
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