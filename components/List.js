// List.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, mediatype }) => {
  if(mediatype !== "person") {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        {/*<Text style={styles.details}>{details}</Text>*/}
        <Text style={styles.mediatype}>{mediatype}</Text>
      </View>
    )
  }
};

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // filter of the name
    if (item.title !== undefined && item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, " "))) {
      return <Item name={item.title} details={item.overview} mediatype={item.media_type}/>;
    }
    else if (item.name !== undefined && item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, " "))) {
      return <Item name={item.name} details={item.overview} mediatype={item.media_type}/>;
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
    gap: 6,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic"
  },
  details: {
    fontSize: 16
  },
  mediatype: {
    fontSize: 12,
    opacity: 0.4
  }
});