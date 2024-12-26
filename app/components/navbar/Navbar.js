import React from 'react';
import { View, Text, Image } from 'react-native';
import menu from "../../../assets/menu-svgrepo-com.png";

const Navbar = () => {
  return (
    <View className="bg-black w-full p-4 flex-row justify-between">
      <Text className="text-white text-xl font-bold">ToDoList</Text>
      <Image  source={menu} style={{ height: 30, width: 30 }} />
    </View>
  );
};

export default Navbar;
