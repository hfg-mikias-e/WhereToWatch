
import React, { useEffect, useState, useCallback} from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Suggestion from '../components/Suggestion';
import Welcome from '../components/Welcome';
import SearchButton from '../components/SearchButton';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const HomeScreen = (probs) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);
    
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2RhZjNiZjk1ZDBlMTViMzJkYTdhZjQ5MDdiOWI5MSIsInN1YiI6IjY0OGYwZTQwYzNjODkxMDBjYWRhY2RjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7T4hBU5uvtIUWt3_jIzLUUga8r6Ix_2ShpdGH58BPY'
      }
    };
    async function prepare() {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        const json = await response.json();
        setData(json.results);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const GetImage = async(index) => {
    const ImagePath = data[index].poster_path;
    const ImageURL = `https://image.tmdb.org/t/p/w500${ImagePath}`;
    return ImageURL;
  }

  const GetTitle = (index) => {
    if(data[index].media_type == 'tv'){
      return data[index].name
    }
    if(data[index].media_type == 'movie'){
      return data[index].title
    }
  }

  return (
    <View style= {styles.container} onLayout={onLayoutRootView}>
      <Welcome/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Suggestion title={GetTitle(0)} image = {GetImage(0)}/>
      <Suggestion title={GetTitle(1)} image = {GetImage(1)}/>
      <Suggestion title={GetTitle(2)} image = {GetImage(2)}/>
      <Suggestion title={GetTitle(3)} image = {GetImage(3)}/>
      <Suggestion title={GetTitle(4)} image = {GetImage(4)}/>
      <Suggestion title={GetTitle(5)} image = {GetImage(5)}/>
      <Suggestion title={GetTitle(6)} image = {GetImage(6)}/>
      <Suggestion title={GetTitle(7)} image = {GetImage(7)}/>
      <Suggestion title={GetTitle(8)} image = {GetImage(8)}/> 
      <Suggestion title={GetTitle(9)} image = {GetImage(9)}/>
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
},
}
)

export default HomeScreen;