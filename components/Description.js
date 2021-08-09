import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import X0 from './X0';

const Drawer = createDrawerNavigator();

function Description({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          onPress={() => navigation.navigate('TicTacToe')}
          title = "Play TicTacToe"
        />

        <Button 
          onPress={ () => navigation.goBack() } 
          title = " Go back "
        />

        <Button
          onPress={() => navigation.navigate('Request')}
          title = "Request"
        />  
      </View>
    );
}

export default Description;
