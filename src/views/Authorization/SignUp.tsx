import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";

const SignUp = () => {

    const navigation = useNavigation();

    const handleSignIn = (): void => {
        navigation.navigate('SignIn')
    }

    return (
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
            <View style={styles.screen1}>
                <Text style={styles.name}>Name</Text>
                <View style={styles.views}>
                    <TextInput placeholder="Enter Name" style={styles.inputs} />
                </View>
                <Text style={styles.name}>Email</Text>
                <View style={styles.views}>
                    <TextInput placeholder="Enter Email" autoCapitalize="none" style={styles.inputs} />
                </View>
                <Text style={styles.name}>Password</Text>
                <View style={styles.views}>
                    <TextInput placeholder="Enter Password" secureTextEntry style={styles.inputs} />
                </View>
                <Text style={styles.name}>Confirm Password</Text>
                <View style={styles.views}>
                    <TextInput placeholder="Retype Password" secureTextEntry style={styles.inputs} />
                </View>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttonTexts}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSignIn} style={[styles.buttons, { backgroundColor: "transparent" }]}>
                <View style={styles.buttonTexts}>
                    <Text style={[styles.buttonTexts1, { color: "black" }]}>Already a member?</Text>
                    <Text style={[styles.buttonTexts2, { color: "orange" }]}>  Sign In</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.homeindicators}>
                <Image source={require("../../assets/icons/Home_Indicator.png")} />
            </View>
        </SafeAreaView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    areas: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "space-between"
    },
    Texts: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    Texts1: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "600",
        color: "#000000"
    },
    Texts2: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 16.5,
        color: "#121212"
    },
    screen1: {
        justifyContent: "center",
        flex: 1
    },
    name: {
        fontSize: 16,
        color: "#121212",
        marginBottom: 8
    },
    inputs: {
        flex: 1,
        justifyContent: "center",
        // height:48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#129575",
        marginBottom: 16,
        paddingHorizontal: 10
    },
    views: {
        height: "15%"
    },
    buttons: {
        backgroundColor: "#129575",
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 16,
        marginTop: 15
    },
    buttonTexts: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
        flexDirection: "row",
    },
    buttonTexts1: {

    },
    buttonTexts2: {

    },
    homeindicators: {
        justifyContent: "center",
        alignItems: "center"
    }
})