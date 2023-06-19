import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';

import Search from './screens/Search';

function SearchingPage() {
  return (<Search/>);
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={SearchingPage}/>
        {/*<Stack.Screen name="Home" component={HomeScreen}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}