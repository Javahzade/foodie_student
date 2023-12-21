import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import ArrowRightIcon from '../assets/icons/arrowRightIcon.svg'
import LogoIcon from '../assets/icons/LogoIcon.svg'

function WelcomeScreen() {
  const navigation = useNavigation();


  const handleOnPress = () => {
    navigation.navigate('SignIn')
  }


  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image} >
      <View style={styles.main}>
        <View style={styles.content}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LogoIcon />
            <Text style={{ color: 'white' }}>
              {'Foodie'}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={styles.text1}>Get Cooking</Text>
            <Text style={styles.text2}>{'Simple way to find Tasty Recipe'}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>{'Start Cooking'}</Text>
            <View style={{ position: 'absolute', right: 14 }}>
              <ArrowRightIcon />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  )
}
export default WelcomeScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color: "white",
    fontSize: 50,
    width: 213,
    height: 120,
    textAlign: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
    height: 120,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#129575",
    width: '60%',
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 16
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    flexDirection: "row",
  },
})