import { View, Text, ScrollView } from "react-native";
import useCapitalize from "../../../hooks/useCapitalize";
import moment from "moment";

export default function ByIdCard({ item }) {

    const { capitalize } = useCapitalize();

    return (
        <View className="justify-between h-screen">
            <ScrollView className="w-full">
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
                        <Text className="text-black text-lg font-bold">Inicio:</Text>
                        <Text className="text-lg text-black"> { moment(item.createdAt).format("DD/MM/YYYY") } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Creada:</Text>
                        <Text className="text-lg text-black"> { item.createdBy } </Text>
                    </View>
                    { item.working && (
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Trabajando:</Text>
                        <Text className="text-lg text-black"> { item.working } </Text>
                    </View> )}
                    <View className="flex-row">
                        <Text className="text-black font-bold text-lg">Entrega:</Text>
                        <Text className="text-lg text-black"> { moment(item.dueDate).format("DD/MM/YYYY") } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Prioridad:</Text>
                        <Text className="text-lg text-black"> { item.priority === "high" ? "Alta" : item.priority === "medium" ? "Media" : item.priority === "low" ? "Baja" : "" } </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-black text-lg font-bold">Terminada:</Text>
                        <Text className="text-lg text-black"> { item.completed === "true" ? "Si" : item.completed === "false" ? "No" : "En Proceso" } </Text>
                    </View>
                    <View className="w-full">
                        <Text className="text-black text-lg font-bold">Descripcion: { item.description === "" && <Text className="font-normal">Sin descripción..</Text> } </Text>
                        <Text className="text-lg text-black mt-1">
                            {item.description ? capitalize(item.description) : ""}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}