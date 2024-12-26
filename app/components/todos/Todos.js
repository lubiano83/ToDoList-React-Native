import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import TodoCard from "./TodoCard";
import Title from "../Title";

export default function Todos() {

    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:8080/api/todos/", { method: "GET" });
            const data = await response.json()
            const dataArray = Array.isArray(data.payload.docs) ? data.payload.docs : [data.payload.docs];
            return dataArray
        } catch (error) {
            console.error("Error al obtener los todos:", error);
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
          const fetchedTodos = await getTodos();
          setTodos(fetchedTodos);
        };
        fetchTodos();
    }, []);

    return (
        <View className="justify-center items-center w-full px-4 h-full pt-4">
            { todos.length === 0 ? ( 
                <ActivityIndicator size="large" color={"black"} />
            ) : (
                <View className="items-center">
                    <Title>Todas las Tareas:</Title>
                    <FlatList
                        className="w-full"
                        data={todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <TodoCard item={item} /> }
                    />
                </View> 
            )}
        </View>
    )
};