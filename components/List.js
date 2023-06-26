// List.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, year, mediatype }) => {
  const navigation = useNavigation();
  if(mediatype !== "person") {
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SearchResult', { result: name })}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.mediatype}>{mediatype.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
};

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    let date = ""
    if(item.release_date !== undefined) {
      date = item.release_date.substring(0, 4) // only release year of movie
    } else if (item.first_air_date !== undefined) {
      date = item.first_air_date.substring(0, 4) // only release year of tv show
    }

    let title = ""
    if(item.title !== undefined) {
      title = item.title // movie title
    } else if (item.name !== undefined) {
      title = item.name // tv show name
    }

    // filter of the name
    if (title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, " "))) {
      return <Item name={title} year={date} mediatype={item.media_type}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    height: "100%",
    width: "100%"
  },
  list: {
    marginVertical: 16
  },
  item: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    width: "80%"
  },
  year: {
    fontSize: 16
  },
  mediatype: {
    fontSize: 12,
    fontWeight: "300"
  },
  info: {
    gap: 2,
  }
});