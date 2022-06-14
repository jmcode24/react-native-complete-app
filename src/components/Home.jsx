import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imgCol}>
        <Image source={require("../../assets/2.home.jpg")}/>
      </View>
      
      <View style={styles.content}>
        <Text style={{fontSize: 25, color: "rgba(17,76,94,255)"}}>KEEP IN TOUCH WITH THE PEOPLE OF SAFE-HANDS</Text>
        <Text style={{marginVertical: 25, fontSize: 18, color: "rgba(17,76,94,255)"}}>Sign in or register with your Safe-hands email</Text>
      </View>

      <View style={styles.buttons}>
        <View style={{borderBottomWidth: 2, borderBottomColor: "#8e7629"}}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "rgba(17,76,94,255)"}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth: 2, borderBottomColor: "#8e7629"}}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "rgba(17,76,94,255)"}}>SIGN IN</Text>
          </TouchableOpacity>
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

  imgCol: {
    flex: 6,
    overflow: "hidden"
  },

  img: {
    resizeMode: "contain",
  },

  content: {
    flex: 3,
    paddingHorizontal: 16,
    padding: 10,
  }, 

  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
  }
});