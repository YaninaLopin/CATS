import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface IProps {
  title:  string;
  onPress?: () => void;
  setTitle?: (text: string) => void;
  getTitle?: () => string;
  image?: string;
}

export default function ButtonArea({title, onPress, image}: IProps) {
  return (
    <TouchableOpacity style={[styles.blockstyle, styles.shadow]}>
       
       <Image style={{width: 200, height: 200}} source={{ uri: breed.image?.url}} />
       <Text style ={styles.header}> {title} </Text> 
       
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  blockstyle: {
    height: 130,
    marginTop: 61,
    marginLeft: 25,
    width: 327,
    backgroundColor: '#F5F5FA',
    borderRadius: 16,
  },

   header: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft:16,
   },
   shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
  },
  
});