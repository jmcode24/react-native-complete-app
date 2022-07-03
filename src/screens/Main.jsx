import React, {useState, useEffect, useLayoutEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import Right from '../headers/Right';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { useSelector } from "react-redux";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { SkypeIndicator } from 'react-native-indicators';

export default function Main () {
  const [user, setUser] = useState(null);
  const [imageUri, setImageUri] = useState("");

  const { uid, email } = useSelector(({ user }) => user);

  const getUserDetails = async () => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      const url = await getDownloadURL(ref(storage, `images/${uid}`));
      setImageUri(url);

      const userData = { ...docSnap.data(), image: url, email };

      if (docSnap.exists()) setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const navigation = useNavigation();

  

  return (
    <View style={styles.container}>
      {!user ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <SkypeIndicator color='grey' />
        </View>
      ) : (
        <>
          <View style={styles.text}>
            <Text style={{fontSize: 20, fontWeight: "bold", marginVertical: 25}}>Exchange Contact Information</Text>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "grey"}}>Scan the QR below to share your contacts</Text>
          </View>

          <View style={styles.qrcode}>
            <QRCode value={JSON.stringify(user)} size={250}/>
          </View>
      
          <View style={styles.userinfo}>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <View style={{flex: 2, marginRight: 22}}>
                <Image source={{ uri: imageUri }} style={styles.imgDetails}/>
              </View>
              <View style={{flex: 8}}>
                <Text style={{fontSize: 22, fontWeight: "bold", letterSpacing: 1, color: "slateblue"}}>{user.name}</Text>
                <Text style={{marginVertical: 6, fontSize: 20, color: "grey"}}>{user.role}</Text>
              </View>
            </View>
          </View>

          <View style={{borderBottomWidth: 0.5, borderBottomColor: "grey"}}></View>

          <View style={styles.footer}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <View style={{flex: 7}}>
                <Text style={{fontSize: 18, padding: 10}}>Want to add a new connection? </Text>
              </View>
              <View style={{flex: 3, alignItems: "center"}}>
                <TouchableOpacity onPress={() => navigation.navigate("ScanQR")} style={{borderWidth: 1,borderColor: "red" ,padding: 10}}>
                  <Text style={{fontSize: 18, color: "red"}}>Scan QR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },

  text: {
    flex: 2,
    paddingHorizontal: 30,
    padding: 15
  },

  qrcode: {
    flex: 5,
    backgroundColor: "white",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center"
  },

  userinfo: {
    flex: 2,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  imgDetails:{
    resizeMode: "cover",
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  footer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center"
  }
});