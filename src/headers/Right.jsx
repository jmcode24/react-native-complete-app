import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Right() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <AntDesign name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};