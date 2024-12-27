import { Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useCapitalize from "../../hooks/useCapitalize"
import { Link } from "expo-router";

export default function TodoCard({ item }) {

    const { capitalize } = useCapitalize();

    return (
        <Link href={`/views/todos/detail/${item._id}`} className="border-2 mb-4 border-black rounded-xl p-2 flex justify-between items-center bg-black shadow-black shadow-sm">
           <View className="flex-row justify-center items-center">
                <View className="gap-1 pr-2 flex-1">
                    <View className="flex-row">
                        <Text className="text-white font-bold"> Tarea: </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="text-white"> {capitalize(item.title)} </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-white font-bold">Categoria:</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="text-white"> {capitalize(item.category)} </Text>
                    </View>
                </View>

                {/* Sección derecha */}
                <View className="items-end flex-col">
                    <Text className="text-white font-bold"> {item.dueDate} </Text>
                    <Text className="text-white font-bold"> {capitalize(item.priority)} </Text>
                    {item.completed ? (
                         <FontAwesome name="check-circle" size={20} color="green" />
                    ) : (
                        <Entypo name="circle-with-cross" size={20} color="red" />
                    )}
                </View>
            </View>
        </Link>
    );
};