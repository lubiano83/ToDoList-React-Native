import React from 'react';
import { Image, View } from 'react-native';
import Logo from '../Logo';
import { Link } from 'expo-router';
import useAuth from '../../hooks/useAuth';
import UserImage from '../UserImage';

export default function Navbar() {

  const { logged } = useAuth();

  return (
    <View className="bg-black w-full py-4 px-6 flex-row justify-between">
      <Logo />
      <Link href={"/views/team/about"}>
        { logged && <Image source={require("../../../assets/link-two-svgrepo-com.webp")} alt='team image' /> }
      </Link>
      <Link href={"/views/users/profile/about"}>
        { logged && <UserImage /> }
      </Link>
    </View>
  );
};