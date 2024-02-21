import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'; 

import Home from './src/home/index'

export default function App() {
  return (
    <View>  
      <StatusBar style="dark" />
      <Home />
    </View>
  );
}


