import React from 'react';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Logo from '../Logo';
import { Link } from 'expo-router';

export default function Navbar() {
  return (
    <View className="bg-black w-full p-4 flex-row justify-between">
      <Logo />
      <Link href={"/views/auth/profile/about"}>
        <FontAwesome name="user-circle-o" size={30} color="white" />
      </Link>
    </View>
  );
};