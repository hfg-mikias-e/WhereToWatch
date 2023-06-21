import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

const Suggestion = ({title , image}) => {
  return(
  <View style={styles.box}>
    <View style = {styles.suggestionBox}>
      <ImageBackground source={{uri: image}} blurRadius={5} style={styles.image} imageStyle={{ borderRadius: 10, height: 90, width: 320,}}>
        <View style= {styles.titleBox}>
        <Text style = {styles.movieTitle}>{title}</Text>  
        </View>
      </ImageBackground>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    box:{
    padding: 10,
    },
    suggestionBox: {
    backgroundColor: '#FFFFFF',
    height: 90,
    width: 320,
    borderRadius: 10,
    },
    titleBox:{
    paddingTop: 25,
    paddingLeft: 20,
    },
    movieTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    },
    image:{
      justifyContent:'flex-start',
    }
}
)

export default Suggestion;
