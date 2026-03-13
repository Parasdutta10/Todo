import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
  return (
    <LinearGradient colors={["blue","red"]} style={styles.container}>
      <SafeAreaView style={styles.box}>
        <Text style={styles.title}> My To Do List</Text>
        <View>
        <TouchableOpacity onPress={() => router.push("/List")}>
          <Text style={styles.btn}>Let&apos;s GO</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>

    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box:{
     justifyContent: "center",
     alignItems: "center",
     flex: 1,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  btn:{
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  }

})
