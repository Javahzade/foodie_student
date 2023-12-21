import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignIn } from './views/Authorization/SignIn';
import { BottomNavigator } from './navigation/BottomNavigator';
import SplashScreen from './views/SplashScreen';
import WelcomeScreen from './views/WelcomeScreen';
import SignUp from './views/Authorization/SignUp';


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