import { Pressable, TextInput, View, Text } from "react-native";
import { Link } from "expo-router";
import Title from "../../Title";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm() {

    const { email, setEmail, password, setPassword, handleLogin } = useAuth();

    return (
        <View className="justify-center items-center h-full px-4 gap-4">
            <View className="gap-4 w-full items-center">
                <Title>Login:</Title>
                <TextInput value={email} onChangeText={setEmail} placeholder="Ingresa tu Email.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} placeholder="Ingresa la Contraseña.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
            </View>
            <View className="flex-row gap-2 w-full justify-center items-center px-1">
                <Link href="/views/auth/register/about" asChild className="w-[50%]">
                    <Pressable className="justify-center items-center bg-black border-2 border-black rounded-lg py-1 px-2">
                        <Text className="text-xl text-white font-bold">Register</Text>
                    </Pressable>
                </Link>
                <Pressable onPress={handleLogin} className="justify-center items-center bg-black border-2 border-black rounded-lg py-1 px-2 w-[50%]">
                    <Text className="text-xl text-white font-bold">Ingresar</Text>
                </Pressable>
            </View>
        </View>
    )
};