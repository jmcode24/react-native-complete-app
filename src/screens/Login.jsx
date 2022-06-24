import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../actions/userAction';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    login(email, password)
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.imgCol}>
        <Image source={require("../../assets/3.login.jpg")} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 25, color: "rgba(17,76,94,255)", padding: 5}}>Email</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20, padding: 5}} placeholder='enter email' value={email} onChangeText={handleEmailChange} keyboardType="email-address"/>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 25, color: "rgba(17,76,94,255)", padding: 5}}>Password</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20, padding: 5}} placeholder='enter password' value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit} style={{width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#F32424", borderRadius: 5, marginVertical: 25}}>
            <Text style={{fontSize: 30, color: "white", letterSpacing: 2}}>SIGN IN</Text>
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