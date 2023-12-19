import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import time from '../../assets'

export const Signin=()=>{

    // const navigation=useNavigation();

    // const handleSignUp=(): void=>{
    // }

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
        <View style={styles.Text}> 
            <Text style={styles.Text1}>Hello,</Text>
            <Text style={styles.Text2}>Welcome Back!</Text>
        </View>
        {/* <View style={styles.mail_password}>
            <Text style={styles.email}>Email</Text>
            <Text style={styles.enterpassword}>Enter Password</Text>
        </View>
        <View style={styles.signup}>
            <Text style={styles.dontaccount}>Don’t have an account?</Text>
            <Text style={styles.signUp}>  Sign up</Text>
        </View>  */}
        <TextInput placeholder="Email" autoCapitalize="none" style={styles.input}/>
        <TextInput placeholder="Enter Password" secureTextEntry style={styles.input}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor:"transparent"}]}>
            <View style={styles.buttonText}>
                <Text style={[styles.buttonText1, {color:"black"}]}>Don’t have an account?</Text>
                <Text style={[styles.buttonText2, {color:"orange"}]}>  Sign Up</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.homeindicator}>
            <Image source={require("../../assets/icons/Home_Indicator.png")}/>   
        </View>
    </SafeAreaView>
  )
}
export default Signin

const styles = StyleSheet.create({
    area:{
        flex:1,
        paddingHorizontal:30,
        justifyContent:"space-between"
    },
    // header:{
    //     flexDirection:"row",    
    //     marginHorizontal:25,
    //     marginTop:29,
    //     alignItems:"center",
    //     justifyContent:"space-between"
    // },
    Text:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    Text1:{
        fontSize:30,
        lineHeight:45,
        fontWeight:"600",
        color:"#000000"
    },
    Text2:{
        fontSize:20,
        fontWeight:"400",
        lineHeight:30,
        color:"#121212"
    },
    input:{
        flex:1,
        justifyContent:"center",
        height:48,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#129575",
        marginBottom:16,
        paddingHorizontal:10
    },
    button:{
        backgroundColor:"#129575",
        height:48,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:16
    },
    buttonText:{
        fontWeight:"bold",
        color:"white",
        fontSize:16,
        flexDirection:"row",
    },
    buttonText1:{

    },
    buttonText2:{

    },
    // mail_password:{
        
    // },
    // email:{
    //     fontWeight:"400",
    //     fontSize:14,
    //     lineHeight:21,
    //     color:"#121212"
    // },
    // enterpassword:{
    //     marginTop:84,
    //     fontWeight:"400",
    //     fontSize:14,
    //     lineHeight:21,
    //     color:"#121212"
    // },
    // signup:{
    //     top:50,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"row",
    //     fontWeight:"500",
    //     fontSize:11,
    //     lineHeight:16.5
    // },
    // dontaccount:{
    //     color:"#000000"
    // },
    // signUp:{
    //     color:"#FF9C00"
    // },
    homeindicator:{
        justifyContent:"center",
        alignItems:"center"
    }
})