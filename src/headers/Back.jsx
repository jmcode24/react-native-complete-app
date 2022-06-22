import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Back() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};