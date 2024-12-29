import { Pressable, View, Text, Alert } from "react-native";
import useAuth from "../../../hooks/useAuth";

export default function LogoutButton() {

    const { handleLogout } = useAuth();

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
                    onPress: async () => {
                        try {
                            await handleLogout(); // Ejecuta la función de logout
                            alert("Logout realizado con éxito"); // Muestra la alerta después de que handleLogout se complete
                        } catch (error) {
                            console.error("Error durante el logout:", error.message);
                        }
                    },
                    style: "destructive", // Estilo de botón destructivo (rojo en iOS)
                },
            ]
        );
    };    

    return (
        <View className="justify-between items-center w-full">
            <Pressable onPress={confirmLogout} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                <Text className="text-xl text-white font-bold">Salir</Text>
            </Pressable>
        </View>
    );
}