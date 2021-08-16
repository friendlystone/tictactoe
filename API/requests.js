import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export default class Requests extends Component{
    constructor(props) {
        super(props);

    this.state = { text: '' }
    }

    render() {
        return(
            <View style = { styles.container }>
                <Button onPress = { this.postData } title = "Show Data" />
                <Text style = { styles.welcome } > { this.state.text } </Text>
            </View>
        )
    }

    /// post method
    postData = async() => { 
        let formData = new FormData();
        formData.append('userid', 1);
        formData.append('comment','admin');
        this.setState({ text: 'Clicked' })
        fetch('https://610cfee166dd8f0017b76f7a.mockapi.io/comments', {
            method: 'POST',
            body: formData
        }).then((Response) => Response.json() )
        .then(( responseJson) => {
            this.setState( { text: JSON.stringify(responseJson)})
        })
    } // works properly

    getData = async(username, password) => { 
        let formData = new FormData();
        formData.append('username', 1);
        formData.append('password','admin');
        this.setState({ text: 'Clicked' })
        fetch('https://610cfee166dd8f0017b76f7a.mockapi.io/comments', {
            method: 'GET',
            body: formData
        }).then((Response) => Response.json() )
        .then(( responseJson) => {
            this.setState( { text: JSON.stringify(responseJson)})
        })
    }



    /// get method
    componentDidMount() {
        fetch('https://610cfee166dd8f0017b76f7a.mockapi.io/users')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
    } // still trying to figure out how to implement 

    /// delete method
    componentDidMount() {
        axios.delete('https://610cfee166dd8f0017b76f7a.mockapi.io/comments')
            .then(() => this.setState({ status: 'Delete successful' }));
    }    
}



const styles = StyleSheet.create ({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
  });
