import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function ScanQR () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    const userData = JSON.parse(data)
    navigation.navigate("MemberProfile", {
      data: JSON.parse(data),
      details: userData,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.scanner}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
      </View>

      <View style={styles.footer}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 18, padding: 10}}>Want to share your contact? </Text>
          </View>
          <View style={{flex: 3, alignItems: "center"}}>
            <TouchableOpacity style={{borderWidth: 1,borderColor: "red" ,padding: 10}}>
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