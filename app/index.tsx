import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (

      <SafeAreaView style={styles.box}>
        <Text style={styles.title}> My To Do List</Text>
        <View>
        <TouchableOpacity onPress={() => router.push("/Home")}>
          <Text style={styles.btn}>Let&apos;s GO</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>

    
  );
}


const styles = StyleSheet.create({
  
  box:{
     justifyContent: "center",
     alignItems: "center",
     flex: 1,
     backgroundColor:"#0A4F6B"
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
  btn:{
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  }

})
