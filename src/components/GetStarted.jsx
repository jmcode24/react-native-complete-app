import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        <Image source={require("../../assets/1.gs.png")} style={styles.logo}/>
        <Text style={{alignSelf: "flex-end", fontSize: 30, fontWeight: "bold", color: "rgba(17,76,94,255)"}}>SAFE-HANDS</Text>
      </View>

      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 35, color: "slateblue"}}>SAFE HANDS</Text>
        <Text style={{fontSize: 35, color: "slateblue"}}>CONTACTS</Text>
      </View>
      

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{borderBottomWidth: 2, padding: 3, borderBottomColor: "slateblue"}}>
        <Text style={{fontSize: 25, fontWeight: "bold" ,color: "rgba(17,76,94,255)"}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  logo: {
    height: 50,
    width: 50
  }
});