import { View, FlatList, ActivityIndicator, Pressable, Text } from "react-native";
import { useEffect, useState } from "react";
import Title from "../../Title";
import ByIdCard from "./ByIdCard";
import { Link } from "expo-router";
import GoBack from "../../GoBack"

export default function ToDoById({ id }) {

    const [todos, setTodos] = useState([]);

    const getTodoById = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, { method: "GET" });
            const data = await response.json()
            const dataArray = Array.isArray(data.payload) ? data.payload : [data.payload];
            return dataArray
        } catch (error) {
            console.error("Error al obtener los todos:", error);
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
          const fetchedTodos = await getTodoById();
          setTodos(fetchedTodos);
        };
        fetchTodos();
    }, []);

    return (
        <View className="justify-between items-center w-full px-4 h-full pt-4">
            { todos.length === 0 ? ( 
                <ActivityIndicator size="large" color={"black"} />
            ) : (
                <View className="items-center w-full h-full gap-4 flex-1">
                    <Title>Detalle:</Title>
                    <FlatList
                        className="w-full h-full"
                        data={todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <ByIdCard item={item} /> }
                    />
                </View>
            )}
            <View className="w-full pb-1 gap-4">
                <Link href={`/views/todos/update/${id}`} asChild className="mt-4">
                    <Pressable className="items-center border-2 border-black rounded-lg bg-black">
                        <Text className="text-lg text-white font-bold">Editar</Text>
                    </Pressable>
                </Link>
                <GoBack />
            </View>
        </View>
    )
};