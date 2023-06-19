
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Suggestion from '../components/Suggestion';
import Welcome from '../components/Welcome';
import SearchButton from '../components/SearchButton';

const HomeScreen = (probs) => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2RhZjNiZjk1ZDBlMTViMzJkYTdhZjQ5MDdiOWI5MSIsInN1YiI6IjY0OGYwZTQwYzNjODkxMDBjYWRhY2RjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7T4hBU5uvtIUWt3_jIzLUUga8r6Ix_2ShpdGH58BPY'
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <View style= {styles.container}>
      <Welcome/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Suggestion title={'Fast X'} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/> 
      <View style = {styles.filler}></View>
      </ScrollView> 
      <SearchButton/>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
alignItems: 'center',
justifyContent: 'center',
},
filler: {
  backgroundColor:'#F0F0F0',
  height:250,
}
}
)

export default HomeScreen;