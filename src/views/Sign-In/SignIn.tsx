import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
// import time from '../../assets'

function Signin(){
  return(
    <SafeAreaView style={styles.area}>
        {/* <View style={styles.header}>
            <Image source={require("../../assets/icons/time.png")}/>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{marginRight:5}} source={require("../../assets/icons/Combined_Shape.png")}/>
                <Image style={{marginRight:5}} source={require("../../assets/icons/Wi-Fi.png")}/>
                <Image style={{marginRight:14}} source={require("../../assets/icons/Rectangle.png")}/>
            </View>
        </View> */}
        <View style={styles.menu}>
            <Text style={styles.menuText1}>Hello,</Text>
            <Text style={styles.menuText2}>Welcome Back!</Text>
        </View>
        <View style={styles.mail}>
            <Text style={styles.email}>Email</Text>
        </View>
        <View style={styles.password}>
            <Text style={styles.enterpassword}>Enter Password</Text>
        </View>
        <View style={styles.signup}>
            <Text style={styles.dontaccount}>Don’t have an account?</Text>
            <Text style={styles.signUp}>  Sign up</Text>
        </View>
        <View style={styles.homeindicator}>
            <Image source={require("../../assets/icons/Home_Indicator.png")}/>
        </View>
    </SafeAreaView>
  )
}
export default Signin

const styles = StyleSheet.create({
    area:{
        flex:1
    },
    header:{
        flexDirection:"row",    
        // marginHorizontal:25,
        // marginTop:29,
        alignItems:"center",
        justifyContent:"space-between"
    },
    menu:{
        top:50,
    //     marginTop:50,
        left:30
    },
    menuText1:{
        width:84,
        height:45,
        // top:94,
        // left:30,
        fontSize:30,
        lineHeight:45,
        fontWeight:"600",
        color:"#000000"
    },
    menuText2:{
        width:155,
        height:30,
        // top:139,
        // left:30,
        fontSize:20,
        fontWeight:"400",
        lineHeight:30,
        color:"#121212"
    },
    mail:{
        top:165,
        left:30
    },
    email:{
        width:38,
        height:21,
        fontWeight:"400",
        fontSize:14,
        lineHeight:21,
        color:"#121212"
    },
    password:{
        top:240,
        left:30
    },
    enterpassword:{
        width:107,
        height:21,
        fontWeight:"400",
        fontSize:14,
        lineHeight:21,
        color:"#121212"
    },
    signup:{
        top:500,
        justifyContent:"center",
        flexDirection:"row",
        height:17,
        fontWeight:"500",
        fontSize:11,
        lineHeight:16.5
    },
    dontaccount:{
        color:"#000000"
    },
    signUp:{
        color:"#FF9C00"
    },
    homeindicator:{
        top:530,
        width:135,
        height:5,
        left:12
    }
})