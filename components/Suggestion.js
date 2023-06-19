import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Suggestion = ({title, image}) => {
  return(
    <View style = {styles.suggestionBox}>
      <View style = {styles.movieTitleBox}>
        <Image source={{
          uri: image
        }}></Image>
        <Text style = {styles.movieTitle}>{title.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    suggestionBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    height: 90,
    width: 320,
    borderRadius: 10,
    margin: 10,
    },
    movieTitle: {
    fontSize: 30,
    },
    movieTitleBox: {
    paddingLeft: 20,
    },
}
)

export default Suggestion;
