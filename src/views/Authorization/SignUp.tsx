import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";
// import time from '../../assets'

export const SignUp=()=>{

    // const navigation = useNavigation();

    // const handleSignIn = (): void => {
    //     navigation.navigate('SignIn')
    // }

  return(
    <SafeAreaView style={styles.areas}>
        {/* <View style={styles.header}>
            <Image source={require("../../assets/icons/time.png")}/>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{marginRight:5}} source={require("../../assets/icons/Combined_Shape.png")}/>
                <Image style={{marginRight:5}} source={require("../../assets/icons/Wi-Fi.png")}/>
                <Image style={{marginRight:14}} source={require("../../assets/icons/Rectangle.png")}/>
            </View>
        </View> */}
        <View style={styles.Texts}> 
            <Text style={styles.Texts1}>Create an account</Text>
            <Text style={styles.Texts2}>Let’s help you set up your account</Text>
            <Text style={styles.Texts2}>it won’t take long.</Text>
        </View>
        <TextInput placeholder="Enter Name" style={styles.inputs}/>
        <TextInput placeholder="Enter Email" autoCapitalize="none" style={styles.inputs}/>
        <TextInput placeholder="Enter Password" secureTextEntry style={styles.inputs}/>
        <TextInput placeholder="Retype Password" secureTextEntry style={styles.inputs}/>
        <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttonTexts}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor:"transparent"}]}>
            <View style={styles.buttonTexts}>
                <Text style={[styles.buttonTexts1, {color:"black"}]}>Already a member?</Text>
                <Text style={[styles.buttonTexts2, {color:"orange"}]}>  Sign In</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.homeindicators}>
            <Image source={require("../../assets/icons/Home_Indicator.png")}/>   
        </View>
    </SafeAreaView>
  )
}
// export default SignUp

const styles = StyleSheet.create({
    areas:{
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
    Texts:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    Texts1:{
        fontSize:30,
        lineHeight:45,
        fontWeight:"600",
        color:"#000000"
    },
    Texts2:{
        fontSize:20,
        fontWeight:"400",
        lineHeight:30,
        color:"#121212"
    },
    inputs:{
        flex:1,
        justifyContent:"center",
        height:48,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#129575",
        marginBottom:16,
        paddingHorizontal:10
    },
    buttons:{
        backgroundColor:"#129575",
        height:48,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:16
    },
    buttonTexts:{
        fontWeight:"bold",
        color:"white",
        fontSize:16,
        flexDirection:"row",
    },
    buttonTexts1:{

    },
    buttonTexts2:{

    },
    homeindicators:{
        justifyContent:"center",
        alignItems:"center"
    }
})