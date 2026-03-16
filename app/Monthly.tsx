import CustomBtn from "@/components/CustomBtn";
import CustomInput from "@/components/CustomInput";

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Daily() {
  const [input, setInput] = useState([""]);
  const Addinput = () => {
    setInput([...input, ""]);
  };
  const handleChange = (value: string, index: number) => {
    const newInput = [...input];
    newInput[index] = value;
    setInput(newInput);
  };
  const handleDelete = (deleteindex: number) => {
    const newInput = input.filter((_, index) => index !== deleteindex);
    setInput(newInput);
  };

  return (
    
      <SafeAreaView style={styles.box}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={styles.btn}>
            <CustomBtn onPress={Addinput} />
          </View>
          <Text style={styles.heading}>Monthly List</Text>
        </View>
        <View style={{ borderColor: "white", borderWidth: 2 }} />

        <ScrollView>
          {input.map((input, index) => (
            <View key={index} style={{ marginTop: 10, width: "100%" }}>
              <CustomInput
                placeholder="Enter Task Name"
                value={input}
                onChangeText={(value) => handleChange(value, index)}
                onPress={() => handleDelete(index)}
              />
              <View
                style={{ borderColor: "white", borderWidth: 1, marginTop: 10 }}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    
  );
};



const styles = StyleSheet.create({
  
  box: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
         backgroundColor:"#0A4F6B"

  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  btn: {
    justifyContent: "flex-end",

    bottom: 20,
  },
});
