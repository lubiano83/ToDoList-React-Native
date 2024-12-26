import { Text } from "react-native";

export default function Title({ children }) {
    return (
        <Text className="text-xl font-bold underline">
            { children }
        </Text>
    )
};