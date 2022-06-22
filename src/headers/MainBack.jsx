import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MainBack() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <AntDesign name="logout" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};