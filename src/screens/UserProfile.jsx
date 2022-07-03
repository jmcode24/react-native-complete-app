import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather ,MaterialIcons, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { PulseIndicator } from 'react-native-indicators';

export default function UserProfile() {
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

  console.log(getUserDetails());

  return (
    <View style={styles.container}>
    {!user ? (
      <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <PulseIndicator color='grey' />
        </View>
    ) : (
      <>
      <View style={{flexDirection: "row", marginVertical: 30}}>
        <View styles={{flex: 2}}>
          <Image source={{ uri: imageUri }} style={styles.imgDetails}/>
        </View>
        <View style={{flex: 8, justifyContent: "center", marginLeft: 22}}>
          <Text style={{fontSize: 22, fontWeight: "bold", letterSpacing: 1, color: "slateblue"}}>{user?.name}</Text>
          <Text style={{marginVertical: 6, fontSize: 20, color: "grey"}}>{user?.role}</Text>
        </View>
      </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity>
            <Entypo name="twitter-with-circle" size={40} color="darkblue" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 22}}>
            <Entypo name="linkedin-with-circle" size={40} color="darkblue" />
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: 30}}>
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <View style={{flex: 1}}>
              <Feather name="phone" size={25} color="#8e7629" />
            </View>
            <View style={{flex: 9, marginLeft: 5}}>
              <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{user?.phone}</Text>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 25}}>
            <View style={{flex: 1}}>
              <MaterialIcons name="email" size={25} color="#8e7629" />
            </View>
            <View style={{flex: 9, marginLeft: 5}}>
              <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{user?.email}</Text>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <View style={{flex: 1}}>
              <Entypo name="location" size={25} color="#8e7629" />
            </View>
            <View style={{flex: 9, marginLeft: 5}}>
              <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{user?.location}</Text>
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
    paddingHorizontal: 16,
    backgroundColor: "#eee"
  },

  imgDetails:{
    resizeMode: "cover",
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});