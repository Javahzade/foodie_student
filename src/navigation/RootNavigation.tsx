import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthorizationNavigator} from './AuthorizationNavigator';
export function RootNavigation() {
  return (
    <NavigationContainer>
      <AuthorizationNavigator/>
    </NavigationContainer>
  );
}