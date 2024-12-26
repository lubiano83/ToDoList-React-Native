import { Text } from "react-native";

const Title = ({ children }) => {
    return (
        <Text className="text-xl font-bold underline">
            { children }
        </Text>
    )
};

export default Title;