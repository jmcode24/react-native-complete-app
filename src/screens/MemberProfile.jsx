import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather ,MaterialIcons, Entypo } from '@expo/vector-icons';

export default function MemberProfile({ route }) {
  const { name, email, role, phone, location, image } = route.params.data;

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", marginVertical: 30}}>
        <View styles={{flex: 2}}>
         <Image source={{uri: image}} style={styles.imgDetails} />
        </View>
        <View style={{flex: 8, justifyContent: "center", marginLeft: 22}}>
          <Text style={{fontSize: 22, fontWeight: "bold", letterSpacing: 1, color: "slateblue"}}>{name}</Text>
          <Text style={{marginVertical: 6, fontSize: 20, color: "grey"}}>{role}</Text>
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
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{phone}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 25}}>
          <View style={{flex: 1}}>
            <MaterialIcons name="email" size={25} color="#8e7629" />
          </View>
          <View style={{flex: 9, marginLeft: 5}}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{email}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <View style={{flex: 1}}>
            <Entypo name="location" size={25} color="#8e7629" />
          </View>
          <View style={{flex: 9, marginLeft: 5}}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "grey"}}>{location}</Text>
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