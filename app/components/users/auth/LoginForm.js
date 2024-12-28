import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import Title from "../../Title";

export default function LoginForm({ setLogged }) {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const router = useRouter();

    const handleLogin = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({ email, password })
            });
      
            if (response.ok) {
                await response.json();
                alert("Login realizado con exito");
                setEmail("");
                setPassword("");
                setLogged(true);
                router.push("/");
            } else {
                alert("Hubo un problema al realizar el login");
            }
          } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }

    return (
        <View className="justify-center items-center h-full px-4 gap-4">
            <View className="gap-4 w-full items-center">
                <Title>Login:</Title>
                <TextInput type="email" value={email} onChangeText={setEmail} placeholder="Ingrese el Email.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="password" value={password} onChangeText={setPassword} placeholder="Ingrese la Contraseña.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
            </View>
            <Pressable onPress={handleLogin} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                <Text className="text-xl text-white font-bold">Ingresar</Text>
            </Pressable>
            <Link href="/" asChild>
                <Pressable className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                    <Text className="text-xl text-white font-bold">Registrar</Text>
                </Pressable>
            </Link>
        </View>
    )
};