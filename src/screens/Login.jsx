import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ActivityIndicator} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import { login } from '../actions/userAction';
import { setAuthenticated } from '../actions/authAction';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyfields, setEmptyFields] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const handleSubmit = async () => {
    try {
      if (!email && !password) {
        setEmptyFields(true);
        setTimeout(() => {
          setEmptyFields(false);
        }, 2000);
      } else {
        startLoading();

        await login(email, password);
        dispatch(setAuthenticated(true));
      };
    } catch(error) {
      if (error.code === 'auth/user-not-found') {
        setLoading(false);
        setInvalidEmail(true);
        setTimeout(() => {
          setInvalidEmail(false);
        }, 2000);
      } else if (error.code === 'auth/wrong-password') {
        setLoading(false);
        setWrongPassword(true);
        setTimeout(() => {
          setWrongPassword(false);
        }, 2000);
      }

      console.log(error)
    } 
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
    <StatusBar style="light" animated />
      <View style={styles.imgCol}>
        <Image source={require("../../assets/3.login.jpg")} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          {emptyfields && <Text style={{alignSelf: "center", color: "red", fontSize: 20, fontWeight: "bold", fontStyle: "italic", marginTop: 5}}>Enter email and password</Text> }
          {invalidEmail && <Text style={{alignSelf: "center", color: "red", fontSize: 20, fontWeight: "bold", fontStyle: "italic", marginTop: 5}}>Invalid email address</Text> }
          {wrongPassword && <Text style={{alignSelf: "center", color: "red", fontSize: 20, fontWeight: "bold", fontStyle: "italic", marginTop: 5}}>Wrong password</Text> }
          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 25, color: "rgba(17,76,94,255)", padding: 5}}>Email</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20, padding: 5}} autoCapitalize='none' placeholder='enter your email' value={email} onChangeText={handleEmailChange} keyboardType="email-address"/>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 25, color: "rgba(17,76,94,255)", padding: 5}}>Password</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20, padding: 5}} placeholder='enter your password' value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
            </View>
          </View>

          <TouchableOpacity disabled={loading} onPress={handleSubmit} style={{width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#F32424", borderRadius: 5, marginVertical: 25}}>
            <Text style={{fontSize: 30, color: "white", letterSpacing: 2}}>SIGN IN {loading && <ActivityIndicator size='small' color='white'/>}</Text>
          </TouchableOpacity>

          <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
              <Text style={{fontSize: 20, color: "rgba(17,76,94,255)", padding: 3}}>Forgot?</Text>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 2, borderBottomColor: "#8e7629", marginHorizontal: 5, padding: 3}}>
              <TouchableOpacity>
                <Text style={{fontSize: 20, color: "rgba(17,76,94,255)"}}>Reset password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },

  imgCol: {
    flex: 5,
    overflow: "hidden",
  },

  img: {
    resizeMode: "contain",
    width: "100%",
    height: 50
  },

  form: {
    flex: 5,
    paddingHorizontal: 16,
  },
});