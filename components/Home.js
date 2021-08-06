import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


function Home({ navigation }) {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          onPress={() => navigation.navigate('TicTacToe')}
          title = "Play TicTacToe"
        />

        <Button
          onPress={() => navigation.navigate('Notifications')}
          title = "Go to notifications"
        />

      </View>
    );
}

export default Home;
  
