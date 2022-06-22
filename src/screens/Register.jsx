import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, TextInput, ImageBackground} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UploadImage from '../components/UploadImage';
import { registerUser } from '../actions/userAction';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  }

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  const handleRoleChange = (text) => {
    setRole(text);
  };

  const handleTwitterChange = (text) => {
    setTwitter(text);
  };

  const handleLinkedInChange = (text) => {
    setLinkedIn(text);
  };

  const handleSubmit = () => {
    registerUser(email, password);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ImageBackground style={styles.upload} resizeMode="cover"  source={require('../../assets/4.register.jpg')}>
        <UploadImage />
      </ImageBackground>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 18}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Full Name</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='enter name' value={name} onChangeText={handleNameChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Email</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='enter a valid email' value={email} onChangeText={handleEmailChange} keyboardType="email-address"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Password</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='enter password' value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Phone Number</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='enter a valid number' value={phone} onChangeText={handlePhoneChange} keyboardType="numeric"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Role</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='what is your role?' value={role} onChangeText={handleRoleChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Twitter</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='twitter handle' value={twitter} onChangeText={handleTwitterChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>LinkedIn</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} placeholder='linkedIn page' value={linkedIn} onChangeText={handleLinkedInChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <TouchableOpacity onPress={handleSubmit} style={{width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#F32424", borderRadius: 5, marginVertical: 25}}>
            <Text style={{fontSize: 30, color: "white", letterSpacing: 2}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  
  upload: {
    flex: 3,
    justifyContent: "center",
    padding: 5
  },

  form: {
    flex: 7,
    paddingHorizontal: 16,
    backgroundColor: "white"
  }
});