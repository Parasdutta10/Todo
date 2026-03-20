
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BackButton = () => {
  return (
    <View>
     <TouchableOpacity style={styles.btn} >
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({

    btn:{
        padding: 10,
    }
})