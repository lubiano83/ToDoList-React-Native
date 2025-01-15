import { Pressable, Text, TextInput, View, Image } from "react-native";
import useAuth from "../../../hooks/useAuth";
import * as ImagePicker from "expo-image-picker";
import Title from "../../Title";

export default function UpdateUser() {
  const { first_name, setFirst_name, last_name, setLast_name, image, setImage, handleUpdate } = useAuth();

  // Función para seleccionar una imagen de la galería
  const handleSelectImage = async () => {
    try {
      // Solicitar permisos para la galería
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("Permiso de galería:", status); // Verifica el estado en la consola
  
      if (status !== "granted") {
        alert("Se necesita acceso a la galería para seleccionar imágenes.");
        return;
      }
  
      // Abrir la galería para seleccionar una imagen
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "Images", // Cambiado a string directo
        allowsEditing: true,
        quality: 1,
      });
  
      console.log("Resultado del picker:", result); // Depuración del resultado
  
      if (!result.canceled) {
        setImage(result.assets[0].uri); // Guarda el URI de la imagen seleccionada
      }
    } catch (error) {
      console.error("Error al seleccionar imagen:", error.message);
    }
  };  

  return (
    <View className="justify-between items-center h-full pt-4 px-4 gap-4">
      <View className="gap-4 w-full justify-center items-center">
        <Title>Update:</Title>

        {/* Botón para seleccionar una imagen */}
        <Pressable
            onPress={handleSelectImage}
            style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 10,
                padding: 10,
                borderColor: "#000",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
                width: "80%",
            }}
            >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>
                Seleccionar Imagen
            </Text>
        </Pressable>

        {/* Mostrar imagen seleccionada */}
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 128, height: 128, borderRadius: 8, marginTop: 16 }}
          />
        )}

        {/* Campos de texto para el nombre y apellido */}
        <TextInput
          value={first_name}
          onChangeText={setFirst_name}
          placeholder="Ingresa tu Nombre.."
          style={{
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 8,
            height: 40,
            paddingLeft: 8,
            color: "black",
            width: "100%",
            marginTop: 8,
          }}
        />
        <TextInput
          value={last_name}
          onChangeText={setLast_name}
          placeholder="Ingresa tu Apellido.."
          style={{
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 8,
            height: 40,
            paddingLeft: 8,
            color: "black",
            width: "100%",
            marginTop: 8,
          }}
        />
      </View>

      <View style={{ width: "100%", marginTop: 16 }}>
        {/* Botón para actualizar el usuario */}
        <Pressable
          onPress={handleUpdate}
          style={{
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 8,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>Actualizar</Text>
        </Pressable>
      </View>
    </View>
  );
}