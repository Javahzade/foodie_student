import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';

function WelcomeScreen() {
  //   const navigation = useNavigation();


  return (
    <View style={styles.main}>

      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image} />
      <View style={styles.content}>
        <Image style={styles.icon}
          source={require('../assets/icons/icon.png')}
        />
      <Text style={styles.text1}>Get Cooking</Text>
      </View>


    </View>
  )
}
export default WelcomeScreen

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",

  },
  button: {
    padding: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: 79,
    height: 120,

  },
  content: {
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    top: 100,

  },
  text1:{
    color:"white",
    fontSize:50,
    width:213,
    height:120,
    textAlign:"center",
    top:287,
  }
})