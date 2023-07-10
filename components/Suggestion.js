import React from 'react';
import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Suggestion = ({title , image}) => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.suggestionBox} onPress={() => navigation.navigate('SearchResult', { result: title})}>
      <ImageBackground source={{uri: image._j}} blurRadius={0} imageStyle={{width: "100%", height: 520}}></ImageBackground>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 20
    }, 
    suggestionBox: {
      backgroundColor: '#FFFFFF',
      height: 520,
      width: "100%",
      borderRadius: 8,
      marginBottom: 20,
      overflow: "hidden"
    }
})

export default Suggestion;
