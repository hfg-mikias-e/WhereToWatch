import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

const BackButton = () => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
      <Entypo name="chevron-left" size={20}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white",
    borderRadius: 40,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
    },
  }
})

export default BackButton;