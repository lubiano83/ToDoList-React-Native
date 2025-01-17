import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { useRouter } from "expo-router";
import Title from "../../Title"
import GoBack from "../../GoBack";

export default function CreateTodo() {

    const [ title, setTitle ] = useState();
    const [ category, setCategory ] = useState();
    const [ dueDate, setDueDate ] = useState();
    const router = useRouter();

    const handleCreate = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/todos`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                category,
                dueDate,
              }),
            });
      
            if (response.ok) {
                await response.json();
                alert("Tarea creada con exito");
                setTitle("");
                setCategory("");
                setDueDate("");
                router.push("/");
            } else {
                alert("Hubo un problema al crear la tarea.");
            }
          } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }

    return (
        <View className="justify-between items-center h-full px-4 pt-4 pb-1">
            <View className="gap-4 w-full items-center">
                <Title>Crear Tarea:</Title>
                <TextInput type="title" value={title} onChangeText={setTitle} placeholder="Ingrese el Titulo.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="category" value={category} onChangeText={setCategory} placeholder="Ingrese la Categoria.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput type="dueDate" value={dueDate} onChangeText={setDueDate} placeholder="Ingrese la Fecha de Entrega.. (DD/MM/YYYY)" className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
            </View>
            <View className="w-full gap-4">
                <Pressable onPress={handleCreate} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                    <Text className="text-xl text-white font-bold">Add</Text>
                </Pressable>
                <GoBack />
            </View>
        </View>
    )
};