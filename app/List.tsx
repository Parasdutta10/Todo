import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "@/components/CustomInput";
import CustomBtn from "@/components/CustomBtn";

const List = () => {
  const [input, Setinput] = useState([""]);
  const Addinput = () => {
    Setinput([...input, ""]);
  };
  const Handlechange = (value: string, index: number) => {
    const newinput = [...input];
    newinput[index] = value;
    Setinput(newinput);
  };
  const handeledelete = (deleteindex: number) => {
    const newinput = input.filter((_, index) => index !== deleteindex);
    Setinput(newinput);
  };

  return (
    <LinearGradient colors={["blue", "red"]} style={styles.container}>
      <SafeAreaView style={styles.box}>
        <View style={{ flexDirection: "row" }}>
            <View style={styles.btn}>
                 <CustomBtn onPress={Addinput} />
         </View>
        <Text style={styles.heading}>Today&apos;s List</Text>
        </View>

        <View style={{ borderColor: "white", borderWidth: 1 }} />

        <View style={{ borderColor: "white", borderWidth: 1 }} />
         <View >
        {input.map((input, index) => (
          <ScrollView key={index}>
          <View key={index} style={{ marginTop: 10, width: "100%" }}>
            <CustomInput
              placeholder="Enter Task Name"
              value={input}
              onChangeText={(value) => Handlechange(value, index)}
              onPress={() => handeledelete(index)}
            />
            <View
              style={{ borderColor: "white", borderWidth: 1, marginTop: 10 }}
            />
          </View>
          </ScrollView>
        ))}
        </View>
      
      </SafeAreaView>
    </LinearGradient>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  
  },
  btn:{
    
        justifyContent:"flex-end",
   
    bottom:20,
    
    
     
  }
});
