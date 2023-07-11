
import React, { useEffect, useState, useCallback} from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Suggestion from '../components/Suggestion';
import SearchButton from '../components/SearchButton';
import * as SplashScreen from 'expo-splash-screen';

const styles = require('../style');

SplashScreen.preventAutoHideAsync();

const HomeScreen = (probs) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);
    
  useEffect(() => {
    async function prepare() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US&api_key=${process.env.TMD_API_KEY}`);
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
    <View style={styles.root} onLayout={onLayoutRootView}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: "100%"}}>
        <View style = {styles.WelcomeBox}>
          <Text style = {styles.header}>Hi, Lars!</Text>
          <Text style = {styles.text}>What do you want to watch today?</Text>
        </View>
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

export default HomeScreen;