import { Text } from "react-native";

export default function Title({ children }) {
    return (
        <Text className="text-2xl font-bold underline">
            { children }
        </Text>
    )
};