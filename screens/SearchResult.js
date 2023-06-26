import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const SearchResult = () => {
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
    <View style={styles.container}>
      
    
    <View style = {styles.page}>
     <View style = {styles.poster}>
     <Text style = {styles.texttitle}>Film-Title</Text>

      </View>
      <View style = {styles.title}>
      </View>
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
    /*<View>
      <Image source={{ uri:  filmData.poster_path }} style={{ width: 200, height: 300 }} />
      

      <Text>{filmData.title}</Text>
      <Text>Releasedate: {filmData.release_date}</Text>
    </View>*/
    </View>
  );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
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
      paddingTop: 240,
      paddingLeft: 20,
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
