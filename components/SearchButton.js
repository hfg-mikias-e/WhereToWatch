import React from 'react';
import {Image, TouchableOpacity , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchButton = () => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Search')}>
      <Image source={require("../assets/Search.png")} style={styles.SearchIcon} ></Image>
    </TouchableOpacity>
  );
};
  
const styles = StyleSheet.create({
appButtonContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "white",
  borderRadius: 40,
  height: 80,
  width: 80,
  position: 'absolute',
  bottom: 36,
  shadowOpacity: 0.6,
  shadowRadius: 4,
  shadowOffset: {
    height: 2,
  },
},
appButtonText: {
  fontSize: 30,
},
SearchIcon: {
  height:60,
  width:60,
},
})

export default SearchButton;