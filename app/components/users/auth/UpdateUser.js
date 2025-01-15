import { Pressable, Text, TextInput, View, Image } from "react-native";
import useAuth from "../../../hooks/useAuth";
import Title from "../../Title";

export default function UpdateUser() {
  const { first_name, setFirst_name, last_name, setLast_name, image, handleUpdate, handleSelectImage } = useAuth();

  return (
    <View className="justify-between items-center h-full pt-4 px-4 gap-4">
      <View className="gap-4 w-full justify-center items-center">
        <Title>Update:</Title>
        {/* Campos de texto para el nombre y apellido */}
        <TextInput value={first_name} onChangeText={setFirst_name} placeholder="Ingresa tu Nombre.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
        <TextInput value={last_name} onChangeText={setLast_name} placeholder="Ingresa tu Apellido.." className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm text-black w-full" />
        <Pressable onPress={handleSelectImage} className="border-2 border-black rounded-lg h-10 pl-2 shdaow-black shadow-sm w-full bg-gray-500 justify-center items-center">
            <Text className="text-xl text-white font-bold">
                Seleccionar Imagen
            </Text>
        </Pressable>
      </View>

      <View style={{ width: "100%", marginTop: 16 }}>
        {/* Botón para actualizar el usuario */}
        <Pressable onPress={handleUpdate} className="w-full justify-center items-center bg-black border-2 border-black rounded-lg">
          <Text className="text-xl text-white font-bold">Actualizar</Text>
        </Pressable>
      </View>
    </View>
  );
}