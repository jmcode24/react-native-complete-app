import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Feather ,MaterialIcons, Entypo } from '@expo/vector-icons';

export default function UserProfile({route: {params: {userInfo}}}) {
  // const userinfo1 = {
  //   name: "Code Train",
  //   email: "learn@codetrain.com",
  //   role: "Best Tuition",
  //   phone: "+233-789-456-123",
  //   location: "East Legon, Ghana",
  //   profileImg: require("../../assets/1.ct.jpg"),
  //   twitter: "@z4zeus",
  //   linkedin: "http://linkedin.com/in/jamil-mohammed-b76ab1235",
  // };
  const userinfo1 = userInfo;

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", marginVertical: 30}}>
        <View styles={{flex: 2}}>
        <Image source={userinfo1.profileImg} style={styles.imgDetails} />
        </View>
        <View style={{flex: 8, justifyContent: "center", marginLeft: 22}}>
          <Text style={{fontSize: 22, fontWeight: "bold", letterSpacing: 1, color: "slateblue"}}>{userinfo1.name}</Text>
          <Text style={{marginVertical: 6, fontSize: 20, color: "grey"}}>{userinfo1.role}</Text>
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
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{userinfo1.phone}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 25}}>
          <View style={{flex: 1}}>
            <MaterialIcons name="email" size={25} color="#8e7629" />
          </View>
          <View style={{flex: 9, marginLeft: 5}}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{userinfo1.email}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <View style={{flex: 1}}>
            <Entypo name="location" size={25} color="#8e7629" />
          </View>
          <View style={{flex: 9, marginLeft: 5}}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{userinfo1.location}</Text>
          </View>
        </View>
      </View>
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