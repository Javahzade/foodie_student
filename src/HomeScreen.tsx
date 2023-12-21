import React from "react";
import {  StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "./Header";
import { BottomNavigator } from "./navigation/BottomNavigator";

function HomeScreen (){
    return(
            <SafeAreaView  style={{ flex:1, marginHorizontal:16 }}> 
            {/*render Header */}
              <Header></Header>
              {/*Bottom*/}
            </SafeAreaView>
    )
};
export default HomeScreen ()

const styles=StyleSheet.create({
  sentence:{
    alignItems:"center",
    fontWeight:"400",
    color:'#A9A9A9'
  }
})