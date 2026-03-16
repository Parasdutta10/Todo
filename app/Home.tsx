import CustomList from '@/components/CustomList';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  
  return (
    
      <SafeAreaView style={styles.box}>
        <View style={styles.heading}>
          <Text style={styles.title}> My Lists</Text>
        </View>
        <View
          style={{
            borderColor: "white",
            borderWidth: 2,
            width: "100%",
            margin: 10,
          }}
        />
        <View style={{ width: "100%", padding: 16,flexDirection:"row" }}>
            
        <TouchableOpacity
          onPress={() => router.push("/Daily")}
          style={styles.add}
        >
              <Entypo name="plus" size={30} color="#ffffff" />
          <Text style={styles.btn}>Create Daily Task List </Text>
        </TouchableOpacity>
        </View>
        <CustomList onPress={() => router.push("/Monthly")} title="Create MonthlyTask List" />
                
      </SafeAreaView>
    
  );
};

export default Home;

const styles = StyleSheet.create({

  box: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
     backgroundColor:"#0A4F6B"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    
  },
  heading: {width:"100%",
    backgroundColor:"#2185b1",
    height:60,
    justifyContent:"center",
    textAlign:'center',
    borderRadius:20
  },
  btn: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    
  },
  add: {
    width: "100%",
   height:50,
         backgroundColor:"#1E6C8E",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:"center",
    paddingTop:10   
    
  },
});
