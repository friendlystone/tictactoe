'use strict';

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';
import { getComments } from './API';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
          myText: 'I\'m ready to get swiped!',
          gestureName: 'none',
          backgroundColor: '#fff'
        };
    }

    state = { 
        id: "",
        userid: "",
        comment: []
     }

    componentDidMount() {
        this.comments();
    }

    comments = () => {
        getComments()
        .catch( error => { console.log('error') })
        .then( (result) => {
            result.json().then( (result) => {
               this.setState({ comments: result })
            });
        })
    }

    updateValue(text, field) {
        if(field === 'userid') {
            this.setState({ userid: text, })
        }
        else if(field === 'comment') {
            this.setState({ comment: text, })    
        }
    }

    addComment = () => {
        let collection = {}
        collection.userid = this.state.userid,
        collection.comment = this.state.comment

        fetch('https://610cfee166dd8f0017b76f7a.mockapi.io/comments', {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('Error', error))
        .then(Response => console.log('Success', Response));
    }

    deleteComment(id){
        fetch(`https://610cfee166dd8f0017b76f7a.mockapi.io/comments/${id}`, {
            method: 'DELETE'    
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                getComments();
            })
        })
    }
     
    onSwipeUp(gestureState) {
        this.setState({myText: 'You swiped up!'});
      }
     
      onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
      }

    onSwipeLeft(gestureState) {
        this.setState({myText: 'You swiped left!'});
    }
     
    onSwipeRight(gestureState) {
        this.setState({myText: 'You swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: 'yellow'});
                break;
        }
      }
    
    render(){
        const { comments } = this.state;
        console.log(comments);
        
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };

        return( 

            <SafeAreaView>
            <TextInput
                style = { styles.input }
                onChangeText = { ( text ) => this.updateValue(text, 'userid') }
                placeholder = "your id"
            />
            <TextInput
                style = { styles.input }
                onChangeText = { ( text ) => this.updateValue(text, 'comment') }
                placeholder = "text"
            />
            <Button 
                onPress = { () => this.addComment() }
                title = "Post a comment" 
            />


            <Button 
                onPress = { () => this.comments() }
                title = "Show the list of comments" 
            />
            
                <View>
                { comments && comments.map((postDetail, index) => {
                    return  (
                        <View> { 
                            `userid: ${postDetail.userid} comment: ${postDetail.comment}`
                             
                            }
                        <GestureRecognizer
                        onSwipe={(direction, state) => this.onSwipe(direction, state)}
                        onSwipeUp={(state) => this.onSwipeUp(state)}
                        onSwipeDown={(state) => this.onSwipeDown(state)}
                        onSwipeLeft={(state) => this.deleteComment(postDetail.id)}
                        onSwipeRight={(state) => this.onSwipeRight(state)}
                        config={config}
                        style={{
                          flex: 1,
                          backgroundColor: this.state.backgroundColor
                        }}
                        >
                        <Text>{this.state.myText}</Text>
                        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
                      </GestureRecognizer>
                      </View>
                      )  
                }) }
                </View>
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