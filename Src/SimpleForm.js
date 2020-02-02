import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function SimpleForm() {
  const [data, setData] = useState({ name: "John Doe", age: "30" });
  const [name, setName] = useState("John");
  const [age, setAge] = useState("50");

  const nameHandler = val => {
    setName(val);
  };

  const ageHandler = val => {
    setAge(val);
  };

  const setDetails = () => {
    setData({ name, age });
  };

  return (
    <View style={styles.container}>
      <Text>
        My Name is {data.name} and my age is {data.age}
      </Text>
      <Text style={styles.title}>Enter Name:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="e.g: John Doe"
        onChangeText={val => nameHandler(val)}
      />
      <Text style={styles.title}>Enter age:</Text>
      <TextInput
        style={styles.inputField}
        keyboardType="number-pad"
        placeholder="e.g: 78"
        onChangeText={val => ageHandler(val)}
      />
      <View style={styles.button}>
        <Button title="Submit" onPress={setDetails} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    marginTop: 10
  },
  inputField: {
    borderColor: "grey",
    borderWidth: 1,
    width: "50%",
    marginTop: 5,
    borderRadius: 3,
    padding: 5
  },
  button: {
    marginTop: 10,
    width: 100
  }
});
