import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const styles = require('../style');

SplashScreen.preventAutoHideAsync();

const SearchResult = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);
  const route = useRoute();
  const title = route.params.result;
  console.log(title);
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fb83f7ff8emsh8a56c247160adc4p17e0edjsnbcb6d9b23ec4',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    async function prepare() {
      try {
        const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=de&output_language=en`, options)
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
    <View style={styles.root} onLayout={onLayoutRootView}>      
    <View style = {styles.page}>
      <View style = {styles.poster}>
        <ImageBackground style = {styles.background} source={{uri: data.result[0].backdropURLs.original}}>
        <BackButton/>
        <Text style = {styles.texttitle}>{data.result[0].title}</Text>
        </ImageBackground>      
      </View>
      
      <View style = {styles.title}></View>
      <View style = {styles.stream}>
        <Text style = {styles.textStream}>Streaming on:</Text>
        <Text style = {styles.textStream}>Netflix</Text>
        <Text style = {styles.textStream}>Disney+</Text>
        <Text style = {styles.textStream}>Amazon Prime</Text>
      </View>

      <View style = {styles.info}>
        <Text>Release-Year: {data.result[0].year}</Text>
        <Text>Duration: {data.result[0].runtime} Minutes</Text>
      </View>
    </View>
    </View>
  );
  };


export default SearchResult;
