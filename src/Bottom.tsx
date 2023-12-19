import React from "react";
import {Image} from 'react-native'
import { createBottomTabNavigator } from "@react navigation/bottom-tabs";

const Bottom = createBottomTabNavigator();

export const BottomNavigator= () => {
    return(
        <BottomNavigator screenOptions ={{headerShown:false}}>
            <Bottom.Screen options ={{
                tabBarIcons:()=> <Image source={require('../assets/icons/home.svg')}/>, 
                tabBarShowLabel:false, }} 
                name ="Home" component= {HomeView}/>
            <Bottom.Screen options ={{
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
                name ="Person" component= {HomeView}/>
        </BottomNavigator>        
    )
}