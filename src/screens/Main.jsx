import React, {useLayoutEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import Right from '../headers/Right';

export default function Main ({navigation: {setOptions}}) {
  const userinfo = {
    name: "Jamil Mohammed",
    email: "zeus2tee@gmail.com",
    role: "Full Stack Developer",
    phone: "+233-789-456-123",
    location: "Accra, Ghana",
    profileImg: require("../../assets/5.dp.jpg"),
    twitter: "@z4zeus",
    linkedin: "http://linkedin.com/in/jamil-mohammed-b76ab1235",
  };

  const userinfo1 = {
    name: "Code Train",
    email: "learn@codetrain.com",
    role: "Best Tuition",
    phone: "+233-789-456-123",
    location: "East Legon, Ghana",
    profileImg: require("../../assets/1.ct.jpg"),
    twitter: "@z4zeus",
    linkedin: "http://linkedin.com/in/jamil-mohammed-b76ab1235",
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <Right userInfo={userinfo1} />
    })
  }, [])

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, fontWeight: "bold", marginVertical: 25}}>Exchange Contact Information</Text>
        <Text style={{fontSize: 20, fontWeight: "bold", color: "grey"}}>Scan the QR below to share your contacts</Text>
      </View>

      <View style={styles.qrcode}>
        <QRCode value={JSON.stringify(userinfo1)} size={250}/>
      </View>
      
      <View style={styles.userinfo}>
        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <View style={{flex: 2, marginRight: 22}}>
            <Image source={userinfo1.profileImg} style={styles.imgDetails}/>
          </View>
          <View style={{flex: 8}}>
            <Text style={{fontSize: 22, fontWeight: "bold", letterSpacing: 1, color: "slateblue"}}>{userinfo1.name}</Text>
            <Text style={{marginVertical: 6, fontSize: 20, color: "grey"}}>{userinfo1.role}</Text>
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