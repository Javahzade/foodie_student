import React from "react";
import {  StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "./components/Header";
import SearhFilter from "./components/SearchFilter";
import { BottomNavigator } from "./navigation/BottomNavigator";

function HomeScreen (){
    return(
            <SafeAreaView  style={{ flex:1, marginHorizontal:16 }}> 
            {/*render Header */}
              <Header text={" Hello Jega"} text1={"What are you looking today?"}/> 
              {/*Searh Filter */}
              <SearhFilter icon ="searc" button={"enter your fav recipe"} click="setting"/>
              <View style ={styles.sentence}>
              <Text>To display recipes Click on "Search recipe"</Text>
              </View>
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