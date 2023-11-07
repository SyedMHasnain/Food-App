import { View } from 'react-native'
import React from 'react'
import Navigation from "./assets/Navigation/Navigation"
import HomeScreen from './assets/components/HomeScreen'


const App = () => {
  return (
    <View >
      <HomeScreen />
      <Navigation />
      
    </View>
  );
}

export default App
