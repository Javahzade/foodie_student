import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {SignIn} from "../views/Authorization/SignIn";
import {SignUp} from "../views/Authorization/SignUp";

const Stack=createStackNavigator();

export function AuthorizationNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    )
}