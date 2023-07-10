import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ImageBackground, FlatList, Image } from 'react-native';
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
    // format the result
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
        //const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=us&output_language=en`, options)
        //const json = await response.json();

        const json = {
          "result": [
            {
              "type": "movie",
              "title": "Nimona",
              "overview": "A knight framed for a tragic crime teams with a scrappy, shape-shifting teen to prove his innocence.",
              "streamingInfo": {
                "us": {
                  "netflix": [
                    {
                      "type": "subscription",
                      "quality": "",
                      "addOn": "",
                      "link": "https://www.netflix.com/title/81444554/",
                      "watchLink": "",
                      "audios": null,
                      "subtitles": null,
                      "price": null,
                      "leaving": 0,
                      "availableSince": 1688157434
                    }
                  ]
                }
              },
              "cast": [
                "Chloë Grace Moretz",
                "Riz Ahmed",
                "Eugene Lee Yang",
                "Frances Conroy",
                "Lorraine Toussaint",
                "Beck Bennett",
                "RuPaul"
              ],
              "year": 2023,
              "advisedMinimumAudienceAge": 10,
              "imdbId": "tt19500164",
              "imdbRating": 77,
              "imdbVoteCount": 8726,
              "tmdbId": 961323,
              "tmdbRating": 78,
              "originalTitle": "Nimona",
              "backdropPath": "/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",
              "backdropURLs": {
                "300": "https://image.tmdb.org/t/p/w300/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",
                "780": "https://image.tmdb.org/t/p/w780/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",
                "1280": "https://image.tmdb.org/t/p/w1280/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",
                "original": "https://image.tmdb.org/t/p/original/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg"
              },
              "genres": [
                {
                  "id": 16,
                  "name": "Animation"
                },
                {
                  "id": 28,
                  "name": "Action"
                },
                {
                  "id": 12,
                  "name": "Adventure"
                }
              ],
              "originalLanguage": "en",
              "countries": [
                "US"
              ],
              "directors": [
                "Troy Quane",
                "Nick Bruno"
              ],
              "runtime": 101,
              "youtubeTrailerVideoId": "f_fuHRyQbOc",
              "youtubeTrailerVideoLink": "https://www.youtube.com/watch?v=f_fuHRyQbOc",
              "posterPath": "/2NQljeavtfl22207D1kxLpa4LS3.jpg",
              "posterURLs": {
                "92": "https://image.tmdb.org/t/p/w92/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "154": "https://image.tmdb.org/t/p/w154/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "185": "https://image.tmdb.org/t/p/w185/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "342": "https://image.tmdb.org/t/p/w342/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "500": "https://image.tmdb.org/t/p/w500/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "780": "https://image.tmdb.org/t/p/w780/2NQljeavtfl22207D1kxLpa4LS3.jpg",
                "original": "https://image.tmdb.org/t/p/original/2NQljeavtfl22207D1kxLpa4LS3.jpg"
              },
              "tagline": "A new hero takes shape."
            }
          ]
        }

        setData(json)
        const availableStreams = await fetchStreamingServices(json)
        setStreams(availableStreams)
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
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

  {/*
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
  */}

  const streamItems = streams.map((item) => {
    // all Platforms for the "subscription" and "free" Option
    if(item.watchOptions.includes("subscription") || item.watchOptions.includes("free")) {
      return (
        <View key={streams.findIndex(e => e === item)} style = {styles.streamOption}>
          <Image source={{uri: 'https://www.movieofthenight.com/static/image/icon/service/netflix.png'}} style={styles.stream}/>
        </View>
      )
    }
  });

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>    
      <View style = {styles.poster}>
        {appIsReady ? (
          <ImageBackground style = {styles.background} source={{uri: data.result[0].backdropURLs.original}}>
            <View style={styles.headerBox}>
              <BackButton/>
              <Text style = {styles.texttitle}>{title}</Text>
            </View>
          </ImageBackground> 
        ) : (
          <Text>Image Loading ...</Text>
        )}
      </View>
      <View style = {styles.page}>
        <Text style = {{ display: streams.length > 0 ? "none" : "flex" }}>Unfortunately we could not find this title on any available platforms for your country.</Text>
        
        {/*
        {platformItems}
        */}

        <View>
          <Text style = {styles.textStream}>Streaming available on:</Text>
          <View style={styles.available}>
            {streamItems}
            {streamItems}
            {streamItems}
          </View>
          <Text style={{width: "100%", opacity: 0.6, textAlign: "center"}}>you might need an active subscription for the listed platforms to be able to access this movie</Text>
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
