import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home'
import Description from './components/Description'
import X0 from './components/X0'
import Login from './API/Login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>

        <Drawer.Screen 
          name = "Home" 
          component = {Home} 
        />

        <Drawer.Screen 
          name = "Notifications" 
          component = {Description} 
        />

        <Drawer.Screen 
          name = "TicTacToe" 
          component = {X0} 
        />

        <Drawer.Screen 
          name = "Login" 
          component = {Login} 
        />      
      
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

