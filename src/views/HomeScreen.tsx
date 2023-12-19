import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';


function HomeScreen() {
  const navigation = useNavigation();
  const gotoDetails = () => {
  navigation.navigate('WelcomeScreen')
  }
  

return (
    <View style={styles.main}>
  <TouchableOpacity onPress={gotoDetails}>
    <Image style={styles.icon}
    source={require('../assets/icons/icon.png')}
    />
  </TouchableOpacity>
  </View>
)
}
export default HomeScreen

const styles= StyleSheet.create({
  main:{
    width:"100%",
    height:"100%",
    backgroundColor:"#129575",
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    padding:30,
  },
  icon:{
    width:79,
    height:120,
  }
})