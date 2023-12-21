import React from "react";
import {  StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "./Header";
import SearhFilter from "./SearchFilter";
import { BottomNavigator } from "../src/navigation/BottomNavigator";

function Home (){
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
              <BottomNavigator Bottom ="tab navigation"/>
            </SafeAreaView>
    )
};
export default Home ()