import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState("");
  const [data, setData] = useState([]);

  const plus = () => {
    const calc = number1 + number2;
    setTotal(calc);
    setNumber1("");
    setNumber2("");
    const entry = number1 + "+" + number2 + "=" + calc;
    setData([...data, { key: entry }]);
  };

  const minus = () => {
    const calc = number1 - number2;
    setTotal(calc);
    setNumber1("");
    setNumber2("");
    const entry = number1 + "-" + number2 + "=" + calc;
    setData([...data, { key: entry }]);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {total} </Text>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        keyboardType={"number-pad"}
        onChangeText={(text) => setNumber1(parseInt(text))}
        value={number1}
      />
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        keyboardType={"number-pad"}
        onChangeText={(text) => setNumber2(parseInt(text))}
        value={number2}
      />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={plus} title="+" />
        <Button onPress={minus} title="-" />
      </View>
      <h7>History</h7>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
