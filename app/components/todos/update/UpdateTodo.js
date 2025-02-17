import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { useRouter } from "expo-router";
import Title from "../../Title"
import DeleteTodo from "../delete/DeleteTodo";
import GoBack from "../../GoBack";

export default function UpdateTodo({ id }) {

    const [ title, setTitle ] = useState();
    const [ category, setCategory ] = useState();
    const [ description, setDescription ] = useState();
    const [ priority, setPriority ] = useState("low");
    const [ completed, setCompleted ] = useState("false");
    const [ dueDate, setDueDate ] = useState();
    const router = useRouter();

    const handleUpdate = async () => {
        try {
            const updateData = {
                title,
                category,
                description,
                priority,
                completed,
                dueDate,
            };
    
            // Filtrar campos vacíos o no definidos
            const filteredData = Object.fromEntries(
                Object.entries(updateData).filter(([_, value]) => value !== undefined && value !== "")
            );
    
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(filteredData),
            });
    
            if (response.ok) {
                alert("Tarea actualizada con éxito");
                setTitle("");
                setCategory("");
                setDescription("");
                setPriority(null);
                setCompleted(null);
                setDueDate("");
                router.push("/");
            } else {
                console.error("Error al actualizar la tarea:", response.status, response.statusText);
                alert("Hubo un problema al actualizar la tarea.");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
            alert("Error al enviar los datos al servidor.");
        }
    };    

    return (
        <View className="justify-between items-center h-full px-4 pt-4">
            <View className="gap-4 w-full items-center">
                <Title>Editar Tarea:</Title>
                <TextInput type="title" value={title} onChangeText={setTitle} placeholder="Ingrese el Titulo.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="category" value={category} onChangeText={setCategory} placeholder="Ingrese la Categoria.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="dueDate" value={dueDate} onChangeText={setDueDate} placeholder="Ingrese la Fecha de Entrega.. DD/MM/YYYY" className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <View className="flex flex-col justify-between w-full">
                    <Text className="text-xl font-bold">Terminada:</Text>
                    <View className="flex-row justify-center items-center">
                        {["false", "inprogress", "true"].map((option) => (
                            <Pressable key={option} onPress={() => setCompleted(option)} className={`flex-1 items-center py-2 border rounded-lg mx-1 ${ completed === option ? "bg-black border-black" : "bg-gray-300 border-gray-400" }`}>
                                <Text className={`text-lg ${ completed === option ? "text-white" : "text-black" }`}>
                                    { option === "true" ? "Si" : option === "inprogress" ? "En Proceso" : "No" }
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
                <View className="flex flex-col justify-between w-full">
                    <Text className="text-xl font-bold">Prioridad:</Text>
                    <View className="flex-row justify-center items-center">
                        {["low", "medium", "high"].map((option) => (
                            <Pressable key={option} onPress={() => setPriority(option)} className={`flex-1 items-center py-2 border rounded-lg mx-1 ${ priority === option ? "bg-black border-black" : "bg-gray-300 border-gray-400" }`}>
                                <Text className={`text-lg ${ priority === option ? "text-white" : "text-black" }`}>
                                    {option === "high" ? "Alta" : option === "medium" ? "Media" : option === "low" ? "Baja" : ""}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
                <TextInput type="description"  multiline={true} numberOfLines={10} value={description} onChangeText={setDescription} placeholder="Ingrese la Descripción.." className="border-2 border-black rounded-lg pl-2 shdaow-black shadow-sm text-black w-full h-1/4" />
            </View>
            <View className="w-full gap-4 pb-1">
                <View className="flex-row justify-center items-center w-full gap-2 px-1">
                    <View className="w-1/2">
                        <DeleteTodo id={id} />
                    </View>
                    <Pressable onPress={handleUpdate} className="w-1/2 justify-center items-center bg-black border-2 border-black rounded-lg">
                        <Text className="text-lg text-white font-bold">Update</Text>
                    </Pressable>
                </View>
                <GoBack />
            </View>
        </View>
    )
};