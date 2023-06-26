import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const styles = require('../style');

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
        console.log(data)
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
    <View style={styles.root}>      
    
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

export default SearchResult;
