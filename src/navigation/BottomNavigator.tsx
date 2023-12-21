import React from "react";
import { Image } from 'react-native'
import HomeScreen from "../HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Bottom = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
        <Bottom.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}  >
            <Bottom.Screen options={{
                tabBarShowLabel:false, }}
            name ="Home" component= {HomeScreen}/>
            {/* <Bottom.Screen options ={{
                tabBarIcons:()=> <Image source={require('../assets/icons/bookmark.svg')}/>, 
                tabBarShowLabel:false, }} 
                name ="Bookmark" component= {HomeView}/>
            <Bottom.Screen options ={{
                tabBarIcons:()=> <Image source={require('../assets/icons/plus.svg')}/>, 
                tabBarShowLabel:false, }} 
                name ="Menu" component= {HomeView}/>
            <Bottom.Screen options ={{
                tabBarIcons:()=> <Image source={require('../assets/icons/people.svg')}/>, 
                tabBarShowLabel:false, }} 
                name ="People" component= {HomeView}/>
            <Bottom.Screen options ={{
                tabBarIcons:()=> <Image source={require('../assets/icons/person.svg')}/>, 
                tabBarShowLabel:false, }} 
                name ="Person" component= {HomeView}/> */}
        </Bottom.Navigator>
    )
}