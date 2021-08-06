import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Game from './Game';

const Drawer = createDrawerNavigator();

export default function X0({ navigation }) {
   
    return (
      <View>
          <Game/>
          <Button 
                onPress={ () => navigation.goBack() } 
                title = " Go back "
          />
      </View>
    );
}
