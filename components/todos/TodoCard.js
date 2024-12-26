import { Text, View, Image, Pressable } from "react-native";
import cross from "../../assets/cross-svgrepo-com.png";
import check from "../../assets/check-svgrepo-com.png";
import { useCapitalize } from "../../hooks/useCapitalize.js";

const TodoCard = ({ item }) => {

    const { capitalize } = useCapitalize();

    return (
        <Pressable className="mt-4 border-2 border-black rounded-xl p-2 flex-row justify-between items-center bg-white">
            {/* Sección izquierda */}
            <View className="gap-1 pr-2 flex-1">
                <Text numberOfLines={1} ellipsizeMode="tail">
                    Tarea: {capitalize(item.title)}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                    Categoria: {capitalize(item.category)}
                </Text>
            </View>

            {/* Sección derecha */}
            <View className="items-end flex-col">
                <Text> {item.dueDate} </Text>
                <Text> {capitalize(item.priority)} </Text>
                {item.completed ? (
                    <Image source={cross} style={{ height: 20, width: 20 }} />
                ) : (
                    <Image source={check} style={{ height: 20, width: 20 }} />
                )}
            </View>
        </Pressable>
    );
};

export default TodoCard;
