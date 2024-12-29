import React from 'react';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Logo from '../Logo';
import { Link } from 'expo-router';
import useAuth from '../../hooks/useAuth';

export default function Navbar() {

  const { logged } = useAuth();

  return (
    <View className="bg-black w-full py-4 px-6 flex-row justify-between">
      <Logo />
      <Link href={"/views/auth/profile/about"}>
        { logged && <FontAwesome name="user-circle-o" size={30} color="white" /> }
      </Link>
    </View>
  );
};