import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../components/GetStarted';
import Home from '../components/Home';
import Login from '../screens/Login';
import Left from '../headers/Left';
import Register from '../screens/Register';
import Main from '../screens/Main';
import Right from '../headers/Right';
import ScanQR from '../screens/ScanQR';
import UserProfile from '../screens/UserProfile';
import MemberProfile from '../screens/MemberProfile';
import Back from '../headers/Back';
import MainBack from '../headers/MainBack';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase/config';
import { setUser } from '../actions/userAction';
import { setAuthenticated } from '../actions/authAction';

export default function Router() {
  const Stack = createNativeStackNavigator();

  const { user, authenticated} = useSelector(({user, authenticated}) => ({
    user, authenticated
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else  {
        dispatch(setUser(null));
        dispatch(setAuthenticated(false))
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user && authenticated  ? "Home" : "Get Started"}>
        {user && authenticated ? (
          <>
            <Stack.Screen name="Main" component={Main}  options={{headerTitle: () => (<View style={{flexDirection: "row"}}>
              <Image source={require("../../assets/1.gs.png")} style={styles.logo}/>
              <Text style={{alignSelf: "flex-end", fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "white"}}>SAFE-HANDS</Text>
              </View>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) => <MainBack {...props} />, headerRight: (props) => <Right {...props} /> }} />
              <Stack.Screen name="ScanQR" component={ScanQR} options={{headerShown: false}} />
              <Stack.Screen name="UserProfile" component={UserProfile} options={{headerTitle: () => (<Text style={{fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "white"}}>My Profile</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Left {...props}/>}} />
              <Stack.Screen name="MemberProfile" component={MemberProfile} options={{headerTitle: () => (<Text style={{fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "white"}}>Member Profile</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Back {...props}/>}} 
            />
          </>) : 
          (<>
            <Stack.Screen name="Get Started" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerTitle: () => (<Text style={{fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "white"}}>Sign In</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Left {...props}/>}} />
            <Stack.Screen name="Register" component={Register} options={{headerTitle: () => (<Text style={{fontSize: 20, fontWeight: "bold", letterSpacing: 2, color: "white"}}>Register</Text>), headerStyle: {backgroundColor: "#F32424"}, headerLeft: (props) =>  <Left {...props}/> }}
            />
          </>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
  }
});