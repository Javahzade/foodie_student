import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from './views/WelcomeScreen';
import { SignIn } from './views/Authorization/SignIn';
import { SignUp } from './views/Authorization/SignUp';
import SplashScreen from './views/SplashScreen';
import HomeScreen from './HomeScreen';
import { BottomNavigator } from './navigation/BottomNavigator';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App