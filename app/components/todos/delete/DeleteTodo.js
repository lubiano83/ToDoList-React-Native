import { Pressable, View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function DeleteTodo({ id }) {

    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                await response.json();
                alert("Tarea eliminada con éxito");
                router.push("/");
            } else {
                alert("Hubo un problema al eliminar la tarea.");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    };

    const confirmDelete = () => {
        Alert.alert(
            "Confirmar eliminación",
            "¿Estás seguro de que deseas eliminar esta tarea?",
            [
                {
                    text: "No",
                    style: "cancel", // Estilo de botón cancelación
                },
                {
                    text: "Sí",
                    onPress: handleDelete, // Ejecuta la eliminación si se confirma
                    style: "destructive", // Estilo de botón destructivo (rojo en iOS)
                },
            ]
        );
    };

    return (
        <View className="justify-between items-center w-full">
            <Pressable
                onPress={confirmDelete}
                className="w-full justify-center items-center bg-black border-2 border-black rounded-lg"
            >
                <Text className="text-xl text-white font-bold">Delete</Text>
            </Pressable>
        </View>
    );
}