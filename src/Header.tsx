import React from "react";
import {  StyleSheet, View, Text, SafeAreaView, Image } from "react-native"


const Header =() => {
    return (
        <SafeAreaView style={styles.area}>
            <Text style={styles.text}>Hello Jega</Text>
            <Text style={styles.text1}>What are you looking today?</Text>
            <View style={styles.search}>
                <Image 
                source={require('./assets/icons/search.svg')}
                style={{height:18, width:18, tintColor:'#129575'}} />
                <Text style={{color:'#129575', fontSize:11, flex:1}}>Search recipe</Text>
            </View>
            <View style={styles.box}>
                <Image
                source={require('./assets/icons/search.svg')}
                style={{height:20, width:20}} />
            </View>
            <Text style={styles.text2}>
                To display recipes Click on "Search recipe"
            </Text>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    area:{
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text:{
        fontSize:20,
        fontWeight:'600',
        marginLeft:20,
        width:107,
        height:30,
        color: '#000000'
    },
    text1:{
        width: 195,
        height: 17, 
        fontSize: 11,
        fontWeight: '400',
        color:'#A9A9A9',
        marginTop: 99,

    },
    search:{
        width: 255,
        height: 40,
        marginTop: 140,
        marginLeft: 30,
        borderRadius: 10
    },
    box:{
        backgroundColor: '#129575',
        borderRadius: 10,
        width: 40,
        height:40,
        marginTop: 140,
        marginLeft: 305,
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        fontSize: 11,
        color:'#A9A9A9',
        fontWeight:'400',
        width: 195,
        height: 34
    },
})