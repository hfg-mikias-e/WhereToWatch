import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const styles = require('../style');

SplashScreen.preventAutoHideAsync();

const SearchResult = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [streams, setStreams] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);
  const route = useRoute();
  const title = route.params.result;

  const fetchStreamingServices = (data) => {
    // ziehe nur die Informationen zu den Streaming-Services aus dem Objekt
    let array = []
    const streamingInfo = Object.keys(data.result[0].streamingInfo.us)

    for(let i = 0; i < streamingInfo.length; i++) {
      array.push({platform: streamingInfo[i], watchOptions: data.result[0].streamingInfo.us[streamingInfo[i]].map(index => index.type)})
    }

    return array
  } 
  
  useEffect(() => {
    const options = {
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    async function prepare() {
      try {
        const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=us&output_language=en`, options)
        const json = await response.json();
        console.log(json)

        setData(json)
        const availableStreams = await fetchStreamingServices(json)
        setStreams(availableStreams)
      } catch(e) {
        // tritt auf, falls keine Streaming-Services gefunden werden können
        setStreams([])
      } finally {
        // Tell the application to render
        console.log(streams.length)
        setAppIsReady(true);
      }
    }

    if(!appIsReady) {
      prepare();
    }
  }, [title]);

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

  const streamItems = streams.map((item) => {
    // all Platforms for the "subscription" and "free" Option
    if(item.watchOptions.includes("subscription") || item.watchOptions.includes("free")) {
      return (
        <View key={streams.findIndex(e => e === item)} style = {styles.streamOption}>
          <Image source={{uri: `https://www.movieofthenight.com/static/image/icon/service/${item.platform}.png`}} style={styles.stream}/>
        </View>
      )
    }
  });

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>    
      <View style = {styles.poster}>
        {appIsReady === true ? (
          <ImageBackground style = {styles.background} source={{uri: data.result[0].backdropURLs.original}}>
            <View style={styles.headerBox}>
              <BackButton/>
              <Text style = {styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        ) : (
          <Text style = {styles.infotext}>Image Loading ...</Text>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style = {styles.page}>
        <View>
          <Text style = {styles.header}>Streaming available on...</Text>   
          {streams.length !== 0 ? (
            <Text style={styles.infotext}>You might need an active subscription for the listed platforms to be able to access this title.</Text>
          ) : (
            <Text style={styles.infotext}>Unfortunately we could not find this title on any available platforms for your country.</Text>
          )} 
          <View style={styles.available}>
            {streamItems}
          </View>
        </View>

        <View style = {styles.general}>
          <View style = {styles.info}>
            <Text style={styles.text}>{data.result[0].overview}</Text>
          </View>

          <View style = {styles.info}>
            <Text style={styles.infotext}>Release-Year: {data.result[0].year}</Text>
            <Text style={styles.infotext}>Duration: {data.result[0].runtime} Minutes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default SearchResult;
