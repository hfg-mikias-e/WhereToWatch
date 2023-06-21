
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
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        const json = await response.json();
        setData(json);
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

  return (
    <View style= {styles.container} onLayout={onLayoutRootView}>
      <Welcome/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Suggestion title={data.results[0].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[1].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[2].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[3].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[4].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[5].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[6].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[7].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
      <Suggestion title={data.results[8].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/> 
      <Suggestion title={data.results[9].title} image = {'https://www.themoviedb.org/t/p/original/j3S6HI4omonneHjZN9xypYVfEt0.jpg'}/>
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