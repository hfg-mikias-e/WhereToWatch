import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
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
  //console.log(title);
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        // Request Limit lol
        //'X-RapidAPI-Key': 'fb83f7ff8emsh8a56c247160adc4p17e0edjsnbcb6d9b23ec4',
        //'X-RapidAPI-Key': '3e125506a0msh8f86510cc35398dp1d6841jsn4760cbd20cf2',
        'X-RapidAPI-Key': '5efc68b1b8msh1c73a37cc6c191ep1bd45bjsna60ed47a68ef',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    async function prepare() {
      try {
        const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=us&output_language=en`, options)
        const json = await response.json();

        // format the result
        let data = []
        const streamingInfo = Object.keys(json.result[0].streamingInfo.us)
        for(let i = 0; i < streamingInfo.length; i++) {
          data.push({platform: streamingInfo[i], watchOptions: json.result[0].streamingInfo.us[streamingInfo[i]].map(index => index.type)})
        }

        setData(json);
        setStreams(data)
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

  const platformItems = streams.map(item =>
    // Platform with each Option
    <View style={styles.stream} key={streams.findIndex(e => e === item)}>
      <Text style = {styles.textStream}>{item.platform}</Text>
      {item.watchOptions.map((option) => {
        return (
          <Text>{option}</Text>
        );
      })}
    </View>
  );

  const streamItems = streams.filter(index => index.watchOptions.includes("subscription")).map(item =>
    // all Platforms for the "subscription" Option
    <View key={streams.findIndex(e => e === item)}>
      <Text style = {styles.textStream}>{item.platform}</Text>
    </View>
  );

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>    
      <View style = {styles.poster}>
        <ImageBackground style = {styles.background} source={{uri: data.result[0].backdropURLs.original}}>
          <View style={styles.headerBox}>
            <BackButton/>
            <Text style = {styles.texttitle}>{data.result[0].title}</Text>
          </View>
        </ImageBackground>      
      </View>
      <View style = {styles.page}>
        <Text style = {{ display: streams.length > 0 ? "none" : "flex" }}>Unfortunately we could not find this title on any available platforms for your country.</Text>
        
        {platformItems}

        <View style = {styles.stream}>
          <Text style = {styles.textStream}>Streaming on:</Text>
          {streamItems}
        </View>

        {/*
        <View style = {styles.stream}>
          <Text style = {styles.textStream}>Streaming on:</Text>
          <Text style = {styles.textStream}>Netflix</Text>
          <Text style = {styles.textStream}>Disney+</Text>
          <Text style = {styles.textStream}>Amazon Prime</Text>
        </View>
        */}

        <View style = {styles.info}>
          <Text>Release-Year: {data.result[0].year}</Text>
          <Text>Duration: {data.result[0].runtime} Minutes</Text>
        </View>
      </View>
    </View>
  );
};


export default SearchResult;
