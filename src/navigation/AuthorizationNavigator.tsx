import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../views/Sign-In/SignIn";

const Stack=createStackNavigator();

export function AuthorizationNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name="SignIn" component={Signin}/>
        </Stack.Navigator>
    )
}