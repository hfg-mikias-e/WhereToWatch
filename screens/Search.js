// Search.js
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import List from "../components/List";
import SearchBar from "../components/SearchBar";

export default function Search() {
  // searchPhrase: text typed into search bar
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [ApiData, setApiData] = useState([]);

  // get new api data whenever the search input has at least 3 characters
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchPhrase}&include_adult=false&page=1&api_key=64c853ad9e6c91621e4ff3f63d5163b0`
      );
      const data = await apiResponse.json();
      setApiData(data.results);
    };
    if(searchPhrase.trim().length === 3) {
      getData();
    } else if(searchPhrase.trim().length < 3) {
      setApiData([]);
    } 
  }, [searchPhrase]);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar style={styles.searchBar}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <List searchPhrase={searchPhrase} data={ApiData} setClicked={setClicked}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    height: "100%"
  }
});