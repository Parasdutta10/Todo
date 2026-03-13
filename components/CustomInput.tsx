import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CheckBox from '@react-native-community/checkbox';

const CustomInput = (Props: {
  placeholder: string;
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  const [checked,setChecked] = useState(false);
  return (
    <View style={styles.box}>
      {/* <CheckBox 
       value={checked}
       onValueChange={setChecked}/> */}
      <TextInput
        style={styles.Text}
        placeholder={Props.placeholder}
        value={Props.value}
        onChangeText={Props.onChangeText}

      />
      <TouchableOpacity onPress={() => Props.onPress()}>
        <MaterialCommunityIcons name="delete-empty" size={27} color="black" />
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
    borderRadius: 20,
    alignItems: "center",
  },
  Text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",

    width: "90%",
  },
});
