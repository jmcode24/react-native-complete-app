import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo, AntDesign } from "@expo/vector-icons";

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { top } = useSafeAreaInsets();

  const { goBack, navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    navigate("MemberProfile", {
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
      <View style={{ flex: 9, paddingTop: top }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, { position: "absolute" }]}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ padding: 16 }}>
            <Entypo name="flash" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goBack()} style={{ padding: 16 }}>
            <AntDesign name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 9, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              height: 250,
              width: 250,
              borderWidth: 2,
              borderColor: "#fff",
              borderRadius: 10,
            }}
          />

          <Text style={{ color: "#fff", marginTop: 32 }}>
            Place QR code within frame
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#dfdfdf",
        }}
      >
        <Text style={styles.footerText}>Want to send you contact?</Text>
        <TouchableOpacity style={styles.scanBtn} onPress={() => goBack()}>
          <Text style={styles.scanBtnText}>Send QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footerText: {
    letterSpacing: 1,
  },

  scanBtn: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderColor: "#f92b4c",
  },

  scanBtnText: {
    fontWeight: "500",
    letterSpacing: 1,
    color: "#f92b4c",
  },
});

//  userprofile{route: {params: {userInfo}}} const userinfo1 = userInfo;
// home {navigation: {setOptions}}
// useLayoutEffect(() => {
//   setOptions({
//     headerRight: () => <Right userInfo={userinfo1} />
//   })
// }, [])