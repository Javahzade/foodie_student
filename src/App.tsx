import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Root } from './Root';

export function App() {
  return (
    <SafeAreaProvider>
      <Root/>
    </SafeAreaProvider>
  )
}
