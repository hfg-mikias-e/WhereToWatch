// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <Entypo name="chevron-left" size={20} color="black"/>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    width: "100%"
  },
  searchBar__unclicked: {
    padding: 12,
    flexDirection: "row",
    gap: 12,
    width: 100,
    flexGrow: 2,
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 12,
    flexDirection: "row",
    width: 100,
    flexGrow: 2,
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    gap: 12,
    justifyContent: "space-evenly",
  },
  input: {
    display: "flex",
    fontSize: 20,
    flexGrow: 2,
    width: 10
  },
});