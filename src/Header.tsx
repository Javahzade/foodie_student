import React from "react";
import {  StyleSheet, View, Text, SafeAreaView } from "react-native"


const Header =() => {
    return (
        <View style ={{flexDirection:"column"}}>
            <Text style={styles.text}>
            </Text>
            <Text style={styles.text1}>
            </Text>
        </View>

    );
};

export default Header;

const styles = StyleSheet.create({
    text:{
        flex: 0.75, 
        fontSize: 22, 
        fontWeight: "700"
    },

    text1:{
        fontSize: 22,  
        fontWeight: "400"

    }
})