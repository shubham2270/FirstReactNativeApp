import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function MapingList() {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bower", key: "7" }
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.key != id);
    });
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={people}
        renderItem={({ data }) => <Text style={styles.item}>{data.name}</Text>}
      /> */}

      <ScrollView>
        {people.map(el => {
          return (
            <View key={el.key}>
              <TouchableOpacity onPress={() => pressHandler(el.key)}>
                <Text style={styles.item}>{el.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },

  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "orange",
    fontSize: 24,
    width: "40%"
  }
});
