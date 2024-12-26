import { Link } from "expo-router";
import { Text } from "react-native";

const Logo = () => {
    return (
        <Link href="/">
            <Text className="text-white text-2xl font-bold">
                ToDoList
            </Text>
        </Link>
    )
};

export default Logo;