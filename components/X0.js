import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import X from './X'
import Circle from './Circle'


const Drawer = createDrawerNavigator();

export default function X0({ navigation }) {
   
    return (
      <View style = { styles.container }>
          <View style = {{ flexDirection: "row" }}>
                <View style = {[ styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}/>
               
                <View style = {[ styles.tile, { borderTopWidth: 0 }]}/>
                <View style = {[ styles.tile, { borderTopWidth: 0, borderRightWidth: 0, }]}/>
          </View>     

          <View style = {{ flexDirection: "row" }}>
                <View style = {[ styles.tile, { borderLeftWidth: 0, }]}/>
                <View style = {[ styles.tile, { }]}/>
                <View style = {[ styles.tile, { borderRightWidth: 0, }]}/>
          </View>   

          <View style = {{ flexDirection: "row" }}>
                <View style = {[ styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0, }]}/>
                <View style = {[ styles.tile, { borderBottomWidth: 0, }]}/>
                <View style = {[ styles.tile, { borderBottomWidth: 0, borderRightWidth: 0, }]}/>
          </View> 

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    tile: {
        borderWidth: 1,
        width: 100,
        height: 100
    }
})