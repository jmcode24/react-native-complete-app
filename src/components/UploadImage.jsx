import React, { useState} from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(_image);

   if (!_image.cancelled) {
     setImage(_image.uri);
   }
  };

  return (
    <View style={styles.container}>
      {image ? (<Image source={{ uri: image }} style={{ width: 180, height: 180 }} />) : (<AntDesign name="user" size={90} color="#420814" style={{alignSelf: "center"}} />)}

      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
          <Text style={{fontSize: 18, fontWeight: "bold", color: "#420814"}}>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>

    );
  }

const styles = StyleSheet.create({
   container: {
    elevation: 2,
    height: 180,
    width: 180,
    backgroundColor: 'whitesmoke',
    position: 'relative',
    borderRadius: 90,
    overflow: 'hidden',
    justifyContent: "center",
    alignSelf: "center"
   },

   uploadBtnContainer:{
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
   },

   uploadBtn:{
    alignItems: "center",
    justifyContent: 'center'
   }
})