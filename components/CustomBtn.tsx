import { StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const CustomBtn = (Props:{ onPress: () => void }) => {
  return (
    <View>
 <TouchableOpacity style={styles.btn} onPress={Props.onPress}>
    <Entypo name="plus" size={30} color="white" />
  
</TouchableOpacity>
</View>

   
  )
}

export default CustomBtn

const styles = StyleSheet.create({
   
    btn:{
    
       
        padding: 10,

        justifyContent:"center",
        width:60,
        height:60,
        
        marginTop:10,

    },
    
})