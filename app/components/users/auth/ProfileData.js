import { useEffect, useState } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import LogoutButton from "./LogoutButton";
import { Link } from "expo-router";
import useCapitalize from "../../../hooks/useCapitalize";
import useAuth from "../../../hooks/useAuth";

export default function ProfileData() {
    
    const { capitalize } = useCapitalize();
    const { user } = useAuth();

    return (
        <View className="justify-between items-center h-full px-4">
            <View className="justify-center items-center flex-1">
                {/* Renderiza los datos del usuario si están disponibles */}
                {user ? (
                    <View className="justify-center items-center gap-4">
                        <View className="border-2 border-black h-[200] w-[200] rounded-xl">
                            <Image src={user.image} height={200} width={200} />
                        </View>
                        <View className="justify-center items-start">
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Id:</Text>
                                <Text className="text-black text-lg">{user._id}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Nombre:</Text>
                                <Text className="text-black text-lg">{capitalize(user.first_name)} {capitalize(user.last_name)}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Email:</Text>
                                <Text className="text-black text-lg">{user.email}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Role:</Text>
                                <Text className="text-black text-lg">{capitalize(user.role)}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Creado:</Text>
                                <Text className="text-black text-lg">{user.createdAt}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Modificado:</Text>
                                <Text className="text-black text-lg">{user.updatedAt}</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <ActivityIndicator size={"large"} color={"black"} />
                )}
            </View>
            <View className="w-full gap-4">
                <Link href="/" asChild className="w-full">
                    <Pressable className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                        <Text className="text-white font-bold text-xl">Editar</Text>
                    </Pressable>
                </Link>
                <LogoutButton />
            </View>
        </View>
    );
}
