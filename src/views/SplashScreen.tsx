import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';


function SplashScreen() {
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen')
    }, 500);
  }, [])

  return (
    <View style={styles.main}>
      <Image style={styles.icon}
        source={require('../assets/icons/icon.png')}
      />
    </View>
  )
}
export default SplashScreen

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#129575",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: 30,
  },
  icon: {
    width: 79,
    height: 120,
  }
})