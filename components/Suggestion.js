import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Suggestion = ({title , image}) => {
  const navigation = useNavigation();
  return(
  <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SearchResult', { result: title})}>
    <View style = {styles.suggestionBox}>
      <ImageBackground source={{uri: image._j}} blurRadius={0} style={styles.image} imageStyle={{ borderRadius: 10, height: 450, width: 320,}}>
        <View style= {styles.titleBox}>  
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    box:{
    padding: 10,
    },
    suggestionBox: {
    backgroundColor: '#FFFFFF',
    height: 450,
    width: 320,
    borderRadius: 10,
    },
    titleBox:{
    paddingTop: 25,
    paddingLeft: 20,
    },
    image:{
      justifyContent:'flex-start',
    }
}
)

export default Suggestion;
