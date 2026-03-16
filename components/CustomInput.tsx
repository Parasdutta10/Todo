import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const CustomInput = (Props: {
  placeholder: string;
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.box}>
      <Checkbox value={checked} onValueChange={setChecked} />
      <TextInput
        style={[
          styles.Text,
          { textDecorationLine: checked ? "line-through" : "none" 
            
           },
           {color: checked ? "white" : "black"},
             
        ]}
        placeholder={Props.placeholder}
        value={Props.value}
        onChangeText={Props.onChangeText}
        editable={!checked}
      />
      <TouchableOpacity onPress={() => Props.onPress()}>
        <MaterialCommunityIcons name="delete-empty" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  Text: {
  
    fontSize: 16,
    fontWeight: "bold",

    width: "80%",
  },
});
