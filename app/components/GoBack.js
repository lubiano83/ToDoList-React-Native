import { Pressable, Text } from "react-native";
import { useRouter } from 'expo-router';

export default function GoBack() {

    const router = useRouter();

    const goBack = () => {
        router.back()
    };

    return (
        <Pressable onPress={goBack} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
            <Text className="text-lg text-white font-bold">Volver</Text>
        </Pressable>
    )
};