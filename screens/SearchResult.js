import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const SearchResult = () => {
  const route = useRoute();
  console.log(route.params)

  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetchFilmData();
  }, []);

  const fetchFilmData = () => {
    fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=Fast X&country=de&show_type=movie&output_language=en')
      .then(response => response.json())
      .then(data => {
        setFilmData(data);
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Filminformationen:', error);
      });
  };

  if (!filmData) {
    return (
      <View>
        <Text>Lade Filminformationen...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>      
    
    <View style = {styles.page}>
      <View style = {styles.poster}>
        <BackButton/>
        <Text style = {styles.texttitle}>Film-Title</Text>
      </View>
      
      <View style = {styles.title}></View>
      <View style = {styles.stream}>
        <Text style = {styles.textStream}>Streaming on:</Text>
        <Text style = {styles.textStream}>Netflix</Text>
        <Text style = {styles.textStream}>Disney+</Text>
        <Text style = {styles.textStream}>Amazon Prime</Text>
      </View>

      <View style = {styles.info}>
        <Text>Releasedate: YYYY-MM-DD</Text>
        <Text>Duration: XX hrs XX min </Text>
      </View>
    </View>
    {/*<View>
      <Image source={{ uri:  filmData.poster_path }} style={{ width: 200, height: 300 }} />
      

      <Text>{filmData.title}</Text>
      <Text>Releasedate: {filmData.release_date}</Text>
    </View>*/}
    </View>
  );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    back: {
      position: "absolute"
    },

    page:{
      alignItems:'flex-start',
      justifyContent:'center',
      gap:10,
      
    
    },
    poster:{
      alignSelf: 'flex-start',
      backgroundColor: 'grey',
      width: 390,
      height: 300,
      padding: 20,
    },

    title:{
      alignSelf:'Column',
      padding: 20,

    },

    texttitle:{
      fontSize:40,
      color:'white',
      alignSelf:'flex-start',
      alignSelf: 'column',
      
    },

    stream:{
      alignSelf:'center',
      padding: 20,
      backgroundColor:'#e6e6e6',
      width: 350,
      borderRadius: 10,


    },

    textStream:{
      fontSize:20,
      alignSelf: 'flex-start'
    },

    info:{
      padding: 20,
      alignSelf:'center',
      backgroundColor: '#e6e6e6',
      width: 350,
      borderRadius: 10,
    },
  });


export default SearchResult;
