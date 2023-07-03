import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Welcome = () => {
  return(
    <View style = {styles.WelcomeBox}>
        <Text style = {styles.UserText}>Hi, Lars!</Text>
        <Text style = {styles.QuestionText}>What do you want to watch today?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    WelcomeBox: {
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 28,
      gap: 8,
    },
    UserText: {
      
      fontSize: 24,
      fontWeight: 600
    },
    QuestionText: {
      fontSize: 20,
    },
    
}
)

export default Welcome;
