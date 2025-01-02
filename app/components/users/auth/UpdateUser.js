import { Pressable, Text, TextInput, View } from "react-native";
import useAuth from "../../../hooks/useAuth";
import Title from "../../Title";

export default function UpdateUser() {

    const { first_name, setFirst_name, last_name, setLast_name, image, setImage, handleUpdate } = useAuth();

    return (
        <View className="justify-between items-center h-full pt-4 px-4 gap-4">
             <View className="gap-4 w-full justify-center items-center">
                <Title>Update:</Title>
                <TextInput value={image} onChangeText={setImage} placeholder="Ingresa una Imagen.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput value={first_name} onChangeText={setFirst_name} placeholder="Ingresa tu Nombre.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
                <TextInput value={last_name} onChangeText={setLast_name} placeholder="Ingresa tu Apellido.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
            </View>
            <View className="w-full gap-4 pb-1">
                <Pressable onPress={handleUpdate} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
                    <Text className="text-xl text-white font-bold">Update</Text>
                </Pressable>
            </View>
        </View>
    )
};