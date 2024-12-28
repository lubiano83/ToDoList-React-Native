import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import Title from "../../Title"
import DeleteTodo from "../delete/DeleteTodo";
import useCapitalize from "../../../hooks/useCapitalize";

export default function UpdateTodo({ id }) {

    const [ title, setTitle ] = useState();
    const [ category, setCategory ] = useState();
    const [ description, setDescription ] = useState();
    const [ priority, setPriority ] = useState("low");
    const [ completed, setCompleted ] = useState();
    const [ dueDate, setDueDate ] = useState();
    const { capitalize } = useCapitalize();
    const router = useRouter();

    const handleUpdate = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                category,
                description,
                priority,
                completed,
                dueDate,
              }),
            });
      
            if (response.ok) {
                await response.json();
                alert("Tarea creada con exito");
                setTitle("");
                setCategory("");
                setDescription("");
                setPriority("");
                setCompleted("");
                setDueDate("");
                router.push("/");
            } else {
                alert("Error", "Hubo un problema al crear la tarea.");
            }
          } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }

    return (
        <View className="justify-between items-center h-full px-4 pt-4">
            <View className="gap-4 w-full items-center">
                <Title>Editar Tarea:</Title>
                <TextInput type="title" value={title} onChangeText={setTitle} placeholder="Ingrese el Titulo.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="category" value={category} onChangeText={setCategory} placeholder="Ingrese la Categoria.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="dueDate" value={dueDate} onChangeText={setDueDate} placeholder="Ingrese la Fecha de Entrega.. (DD/MM/YYYY)" className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <Pressable onPress={() => setCompleted(!completed)} className={`w-full h-10 justify-center items-center ${ completed === true ? "bg-green-500" : completed === false ? "bg-red-500" : "bg-gray-500" } border-2 border-black rounded-lg`}>
                    <Text className="text-xl text-white font-bold">
                        {completed == true ? "Completado: Sí" : completed === false ? "Completado: No" : "Selecciona Competado" }
                    </Text>
                </Pressable>
                <View className="flex flex-row justify-between w-full">
                    {["low", "medium", "high"].map((option) => (
                        <Pressable key={option} onPress={() => setPriority(option)} className={`flex-1 items-center py-2 border rounded-lg mx-1 ${ priority === option ? "bg-black border-black" : "bg-gray-300 border-gray-400" }`}>
                            <Text className={`text-lg ${ priority === option ? "text-white" : "text-black" }`}>
                                {option === "high" ? "Alta" : option === "medium" ? "Media" : option === "low" ? "Baja" : ""}
                            </Text>
                        </Pressable>
                    ))}
                </View>
                <TextInput type="description"  multiline={true} numberOfLines={10} value={description} onChangeText={setDescription} placeholder="Ingrese la Descripción.." className="border-2 border-black rounded-lg pl-2 shdaow-black shadow-sm text-black w-full h-1/4" />
            </View>
            <View className="w-full gap-4 pb-1">
                <Pressable onPress={handleUpdate} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                    <Text className="text-xl text-white font-bold">Update</Text>
                </Pressable>
                <DeleteTodo id={id} />
            </View>
        </View>
    )
};