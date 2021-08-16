import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import axios from 'axios';
import { getUsers } from './API';

export default class Login extends React.Component{
    state = { 
        username: "",
        password: ""
     }

    onChangeUsername = ( newUsername ) => {
        this.setState({ username: newUsername })
    }

    onChangePassword = ( newPassword ) => {
        this.setState({ password: newPassword })
    }

    login = () => {
        getUsers()
            .catch( error => { console.log('error') } )
            .then( (result) => {
                result.json().then( (result) => {
                    result.map(( account ) => { 
                        if( account.username === this.state.username )
                            {
                                if( account.password === this.state.password )
                                {
                                    console.log("Logged in");
                                }
                                else
                                    {
                                        console.log("Login failed");
                                    }
                            }
                    })
                });
            })
    }

    render(){
        console.log(this.state.username);
        return(
            <SafeAreaView>
                    <TextInput
                        style = { styles.input }
                        onChangeText = { ( username ) => this.onChangeUsername(username) }
                        value = { this.state.username }
                        placeholder = "username"
                    />
                    <TextInput
                        style = { styles.input }
                        onChangeText = { ( password ) => this.onChangePassword(password) }
                        value = { this.state.password }
                        placeholder = "password"
                    />
                    <Button 
                        onPress = { () => this.login() }
                        title = "Login" 
                    />
            </SafeAreaView>
        );
    }
} 

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });