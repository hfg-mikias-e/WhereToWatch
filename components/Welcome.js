import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Welcome = () => {
  return(
    <View style = {styles.WelcomeBox}>
        <Text style = {styles.UserText}>Hi Lars</Text>
        <Text style = {styles.QuestionText}>Was möchtest Du heute sehen?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    WelcomeBox: {
    alignSelf: 'flex-start',
    paddingTop: 80,
    paddingLeft: 40,
    paddingBottom: 30,
    gap: 10,
    },
    UserText: {
    fontSize: 25,
    },
    QuestionText: {
    fontSize: 20,
    },
    
}
)

export default Welcome;
