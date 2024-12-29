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
                <TextInput type="email" value={email} onChangeText={setEmail} placeholder="Ingrese el Email.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="password" value={password} onChangeText={setPassword} placeholder="Ingrese la Contraseña.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
            </View>
            <View className="flex-row gap-2 w-full justify-center items-center">
                <Link href="/" asChild>
                    <Pressable className="justify-center items-center bg-black border-2 border-black rounded-lg py-1 px-2">
                        <Text className="text-xl text-white font-bold">Registrar</Text>
                    </Pressable>
                </Link>
                <Pressable onPress={handleLogin} className="justify-center items-center bg-black border-2 border-black rounded-lg py-1 px-2">
                    <Text className="text-xl text-white font-bold">Ingresar</Text>
                </Pressable>
            </View>
        </View>
    )
};