import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function ScanQR () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(data);
    navigation.navigate("MemberProfile", {
      data: JSON.parse(data),
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.scanner, {paddingTop: top}]}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={[StyleSheet.absoluteFillObject, { position: "absolute" }]} />

        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
          <TouchableOpacity style={{ padding: 16 }}>
            <Entypo name="flash" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 16 }}>
            <AntDesign name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 9, alignItems: "center", justifyContent: "center" }}>
          <View style={{ height: 300, width: 300, borderWidth: 2, borderColor: "#fff", borderRadius: 15,}}/>

          <Text style={{ color: "#fff", marginTop: 32 }}>
            Place QR code within frame
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 18, padding: 10}}>Want to share your contact? </Text>
          </View>
          <View style={{flex: 3, alignItems: "center"}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{borderWidth: 1,borderColor: "red" ,padding: 10}}>
              <Text style={{fontSize: 18, color: "red"}}>Send QR</Text>
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

  scanner: {
    flex: 9,
  },

  footer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center"
  }
});