import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Square(props) {
    return (
        <TouchableOpacity onPress = { props.onClick }>
          <View style = { styles.container }>
                <View style = { styles.SquareShapeView }/>
                     { props.value }
          </View>
        </TouchableOpacity>
    );
}
  
export default class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value = { this.props.squares[i] }
          onClick = { () => this.props.onClick(i) }
        />
      );
    }
  
    render() {
      return (
        <View style = {{ alignItems: 'center'}}>
            <View style = {{ flexDirection: "row", alignContent: 'center'}}>
                { this.renderSquare(0) }
                { this.renderSquare(1) }
                { this.renderSquare(2) }
            </View>

            <View style = {{ flexDirection: "row", alignContent: 'center'}}>
                { this.renderSquare(3) }
                { this.renderSquare(4) }
                { this.renderSquare(5) }
            </View>   

            <View style = {{ flexDirection: "row", alignContent: 'center'}}>
                { this.renderSquare(6) }
                { this.renderSquare(7) }
                { this.renderSquare(8) }
            </View>                     
        </View>
      );
    }
}

const styles = StyleSheet.create ({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f',
  },
 
  SquareShapeView: {
    width: 120,
    height: 120,
  }
});