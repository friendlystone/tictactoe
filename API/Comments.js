'use strict';

import React, { Component, useState } from 'react';
import { 
    Button, 
    StyleSheet, 
    TextInput, 
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    TouchableHighlight 
} from 'react-native';

import { getComments } from './API';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

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
        comment: [],
        listData: Array(20)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
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
    closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    renderItem = (data, rowMap) => (
        <SwipeRow
            disableLeftSwipe={parseInt(data.item.key) % 2 === 0}
            leftOpenValue={20 + Math.random() * 150}
            rightOpenValue={-150}
        >
            <View style={styles.rowBack}>
                <Text>Left</Text>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnLeft]}
                    onPress={() => closeRow(rowMap, data.item.key)}
                >
                    <Text style={styles.backTextWhite}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => this.deleteRow(rowMap, data.item.key)}
                >
                    <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
            <TouchableHighlight
                onPress={() => console.log('You touched me')}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{data.item.comment}</Text>
                </View>
            </TouchableHighlight>
        </SwipeRow>
    );
  

    render(){
        const { comments, listData } = this.state;
        console.log(comments);
        console.log(listData);

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
            
            <View style={styles.container}>
               <SwipeListView data={comments} renderItem={this.renderItem} />
            </View>
    </SafeAreaView>    
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });