import React from 'react';
import { View, Image } from 'react-native';
import menu from "../../../assets/menu-svgrepo-com.png";
import Logo from '../Logo';

const Navbar = () => {
  return (
    <View className="bg-black w-full p-4 flex-row justify-between">
      <Logo />
      <Image  source={menu} style={{ height: 30, width: 30 }} />
    </View>
  );
};

export default Navbar;
