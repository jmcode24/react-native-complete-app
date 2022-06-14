import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../components/GetStarted';
import Home from '../components/Home';
import Login from '../screens/Login';
import Left from '../headers/Left';
import Register from '../screens/Register';


export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get Started">
        <Stack.Screen name="Get Started" component={GetStarted} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerTitle: () => (<Text style={{fontSize: 30, fontWeight: "bold", letterSpacing: 2, color: "white"}}>Sign In</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Left {...props}/>}} />
        <Stack.Screen name="Register" component={Register} options={{headerTitle: () => (<Text style={{fontSize: 30, fontWeight: "bold", letterSpacing: 2, color: "white"}}>Register</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Left {...props}/> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};