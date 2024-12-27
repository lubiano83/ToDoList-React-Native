import { Link } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import useCapitalize from "../../../hooks/useCapitalize";

export default function ByIdCard({ item }) {

    const { capitalize } = useCapitalize();

    return (
        <View className="justify-between h-screen pb-safe-offset-56">
            <ScrollView className="w-full mt-4">
                <View className="gap-2 h-full justify-between">
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Id:</Text>
                        <Text className="text-lg text-black"> { item._id } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-lg text-black font-bold">Tarea:</Text>
                        <Text className="text-lg text-black"> { capitalize(item.title)} </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Categoria:</Text>
                        <Text className="text-lg text-black"> { capitalize(item.category)} </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black font-bold text-lg">Entrega:</Text>
                        <Text className="text-lg text-black"> { item.dueDate } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Creada:</Text>
                        <Text className="text-lg text-black"> { item.createdAt } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Terminada:</Text>
                        <Text className="text-lg text-black"> { item.completed ? "Si" : "No" } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Prioridad:</Text>
                        <Text className="text-lg text-black"> { item.priority === "high" ? "Alta" : item.priority === "medium" ? "Media" : item.priority === "low" ? "Baja" : "" } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Descripcion:</Text>
                        <Text className="text-lg text-black"> { item.description ? capitalize(item.description) : "Sin descripción.." } </Text>
                    </View>
                </View>
            </ScrollView>
            <Link href={`/views/todos/update/${item._id}`} asChild className="mt-4 mb-6">
                <Pressable className="items-center border-2 border-black rounded-lg bg-black">
                    <Text className="text-lg text-white font-bold">Editar</Text>
                </Pressable>
            </Link>
        </View>
    )
}