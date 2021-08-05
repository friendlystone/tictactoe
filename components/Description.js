import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Description({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          onPress={() => navigation.navigate('X0')}
          title = "Play TicTacToe"
        />

        <Button 
          onPress={ () => navigation.goBack() } 
          title = " Go back "
        />
      </View>
    );
}

export default Description;
