import { Text, View } from "react-native";
import GoBack from "../GoBack";

export default function Team() {
    return (
        <View className="justify-between items-center w-full px-4 flex-1">
            <View>
                <Text>Hola mundo!</Text>
            </View>
            <View className="w-full gap-4 pb-1">
                <GoBack />
            </View>
        </View>
    )
};