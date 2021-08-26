import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Button, 
  View,
  Text,
  Image 
} from 'react-native';

import Home from './components/Home'
import Description from './components/Description'
import X0 from './components/X0'
import Login from './API/Login';
import Requests from './API/requests';
import Comments from './API/Comments';
import Calendar from './components/Calendar';
import aScreen from './design/aScreen';


const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./images/geogeo.jpg')}
    />
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
    //  headerRight: () => (
      
     // ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
}

export default class App extends React.Component {

  render() {
    return (
      
      <NavigationContainer>

        <Drawer.Navigator>

          <Drawer.Screen 
            name = "Home" 
            component = {HomeScreen}
            options={({ navigation, route }) => ({
              headerRight: (props) => <LogoTitle {...props}
              />,
            })} 
          />

          <Drawer.Screen 
            name = "Notifications" 
            component = {Description} 
          />

          <Drawer.Screen 
            name = "TicTacToe" 
            component = {X0} 
          />

          <Drawer.Screen 
            name = "Login" 
            component = {Login} 
          />

          <Drawer.Screen 
            name = "Request" 
            component = {Requests} 
          />   

          <Drawer.Screen 
            name = "Comment" 
            component = {Comments} 
          />

          <Drawer.Screen 
            name = "Calendar" 
            component = {Calendar} 
          />  

          <Drawer.Screen 
            name = " - " 
            component = {aScreen} 
          />        
        
        </Drawer.Navigator>
        
      </NavigationContainer>
    );
  }
}

