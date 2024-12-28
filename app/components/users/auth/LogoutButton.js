import { Pressable, View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function LogoutButton({ setLogged }) {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/logout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });
            if (response.ok) {
                await response.json();
                alert("Logout realizado con éxito");
                setLogged(false);
                router.push("/");
            } else {
                alert("Hubo un problema al realizar el logout");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    };

    const confirmLogout = () => {
        Alert.alert(
            "Confirmar Logout",
            "¿Estás seguro de que deseas cerrar la sesión?",
            [
                {
                    text: "No",
                    style: "cancel", // Estilo de botón cancelación
                },
                {
                    text: "Sí",
                    onPress: handleLogout, // Ejecuta la eliminación si se confirma
                    style: "destructive", // Estilo de botón destructivo (rojo en iOS)
                },
            ]
        );
    };

    return (
        <View className="justify-between items-center w-full">
            <Pressable
                onPress={confirmLogout}
                className="w-full justify-center items-center bg-black border-2 border-black rounded-lg"
            >
                <Text className="text-xl text-white font-bold">Salir</Text>
            </Pressable>
        </View>
    );
}