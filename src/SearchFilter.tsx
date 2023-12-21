import React from "react";
import {  StyleSheet, View, Text, Image } from "react-native";


function SearhFilter(){
    return(
        <View style ={styles.button}>
            <Text>Search recipe</Text>
            <Image source= {require('../src/assets/icons/search.svg')}/>
        </View>
        <View style={styles.click}>
            <Image></Image>
            </View>
                
            
    );
};

export default SearhFilter ;

const styles = StyleSheet.create({
    button:{
        color:'#129575',
        backgroundColor:'#FFFFFF',
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginVertical: 16,
        borderWidth:255,
        marginLeft:30,
        marginTop:140,
    },
    click:{
        marginTop: 140,
        marginLeft: 305,
        borderRadius: 10,
        backgroundColor:'#129575'
    },
})