import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from './screens/Search';
import HomeScreen from './screens/HomeScreen';
import SearchResult from './screens/SearchResult';

function SearchingPage() {
  return (<Search/>);
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={SearchingPage}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SearchResult" component={SearchResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}