import { View, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import Title from "../../Title";

const ToDoById = ({ id = 1 }) => {

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
        <View className="justify-center items-center w-full px-4 h-full">
            { todos.length === 0 ? ( 
                <ActivityIndicator size="large" color={"black"} />
            ) : (
                <>
                    <Title>Detalle:</Title>
                    <FlatList
                        className="w-full"
                        data={todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <TodoCard item={item} /> }
                    />
                </> 
            )}
        </View>
    )
};

export default ToDoById;