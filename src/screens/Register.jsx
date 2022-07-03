import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, TextInput, ImageBackground, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UploadImage from '../components/UploadImage';
import { registerUser } from '../actions/userAction';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../actions/authAction';

export default function Register() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyfields, setEmptyFields] = useState(false);

  const dispatch = useDispatch();

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

  const handleLocationChange = (text) => {
    setLocation(text);
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

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  };

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password || !phone || !location || !role || !twitter || !linkedIn) {
        setEmptyFields(true);
        setTimeout(() => {
          setEmptyFields(false);
        }, 2000);
      } else {
        startLoading();

        const userInfo = {
          name: name,
          role: role,
          phone: phone,
          location: location,
          twitter: twitter,
          linkedIn: linkedIn,
        };

      await registerUser(email, password, userInfo, image);
      dispatch(setAuthenticated(true));
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ImageBackground style={styles.upload} resizeMode="cover"  source={require('../../assets/4.register.jpg')}>
        <UploadImage image={image} setImage={setImage}/>
      </ImageBackground>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          {emptyfields && <Text style={{alignSelf: "center", color: "red", fontSize: 20, fontWeight: "bold", fontStyle: "italic", marginTop: 5}}>Leave no input field empty</Text> }
          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 18}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Full Name</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} autoCapitalize='words' placeholder='enter name' value={name} onChangeText={handleNameChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Email</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} autoCapitalize='none' placeholder='enter a valid email' value={email} onChangeText={handleEmailChange} keyboardType="email-address"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Password</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} autoCapitalize='none' placeholder='enter password' value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
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
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Location</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} autoCapitalize='words' placeholder='where are you located?' value={location} onChangeText={handleLocationChange} keyboardType="default"/>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}></View>

          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
            <View style={{flex: 4, padding: 5}}>
              <Text style={{fontSize: 22, color: "rgba(17,76,94,255)"}}>Role</Text>
            </View>
            <View style={{flex: 6, backgroundColor: "whitesmoke", padding: 5}}>
              <TextInput style={{fontSize: 20}} autoCapitalize='words' placeholder='what is your role?' value={role} onChangeText={handleRoleChange} keyboardType="default"/>
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

          <TouchableOpacity disabled={loading} onPress={handleSubmit} style={{width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#F32424", borderRadius: 5, marginVertical: 25}}>
            <Text style={{fontSize: 30, color: "white", letterSpacing: 2}}>REGISTER {loading && <ActivityIndicator size='small' color='white'/>}</Text>
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