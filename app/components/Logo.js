import { Link } from "expo-router";
import { Text } from "react-native";

export default function Logo() {
    return (
        <Link href="/">
            <Text className="text-white text-2xl font-bold">
                ToDoList
            </Text>
        </Link>
    )
};