import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import axios from 'axios';

export default function Login(){

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView>
                <TextInput
                    style = { styles.input }
                    onChangeText = { onChangeText }
                    value = { text }
                    placeholder = "username"
                />
                <TextInput
                    style = { styles.input }
                    onChangeText = { onChangeNumber }
                    value = { number }
                    placeholder = "password"
                 />
                 <Button 
                    onPress = { () => navigation.goBack() }
                    title = "Login" 
                />
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });