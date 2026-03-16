import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomList = (Props: 
      
    { onPress: () => void;
        title:string;
    }) => {
  return (
    <View style={{ width: "100%", padding: 16, flexDirection: "row" }}>
      <TouchableOpacity onPress={Props.onPress} style={styles.add}>
        <Entypo name="plus" size={30} color="black" />
        <Text style={styles.btn}>{Props.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  btn: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  add: {
    width: "100%",

    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
});
