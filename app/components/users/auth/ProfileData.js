import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import LogoutButton from "./LogoutButton";
import { Link } from "expo-router";
import useCapitalize from "../../../hooks/useCapitalize";
import useAuth from "../../../hooks/useAuth";
import GoBack from "../../GoBack";

export default function ProfileData() {
    
    const { capitalize, capitalizeEachWord } = useCapitalize();
    const { user } = useAuth();
    console.log(user.image)

    return (
        <View className="justify-between items-center w-full px-4 flex-1">
            <View className="justify-center items-center w-full flex-1">
                {user ? (
                    <View className="justify-center items-center gap-4 flex-1">
                        <View className="border-2 border-black h-[200] w-[200] rounded-xl">
                            <Image  source={{ uri: user.image }} style={{ width: 196, height: 196, borderRadius: 8 }} />
                        </View>
                        <View className="justify-center items-start">
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Id:</Text>
                                <Text className="text-black text-lg">{user._id}</Text>
                            </View>
                            <View className="flex-row gap-1">
                                <Text className="text-black font-bold text-lg">Nombre:</Text>
                                <Text className="text-black text-lg">{capitalizeEachWord(user.first_name)} {capitalizeEachWord(user.last_name)}</Text>
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
            <View className="w-full gap-4 pb-1">
                <View className="gap-2 w-full px-1 flex-row justify-center items-center">
                    <View className="w-1/2">
                        <LogoutButton />
                    </View>
                    <Link href="/views/auth/update/about" asChild>
                        <Pressable className="w-1/2 justify-center items-center bg-black border-2 border-black rounded-lg">
                            <Text className="text-white font-bold text-lg">Editar</Text>
                        </Pressable>
                    </Link>
                </View>
                <GoBack />
            </View>
        </View>
    );
}
