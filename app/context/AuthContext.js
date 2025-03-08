import { createContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Linking } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (logged) {
            handleProfile();
        } else {
            handleLogout();
        }
    }, [logged]);

    // Login
    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.payload);
                setLogged(true);
                setEmail("");
                setPassword("");
                alert("Login realizado con éxito");
                router.push("/");
            } else {
                alert("Hubo un problema al realizar el login");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    };

    // Logout
    const handleLogout = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/logout`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (response.ok) {
                await response.json();
                setUser(null);
                setLogged(false);
                router.push("/");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    };

    // Fetch user profile
    const handleProfile = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/users/id`, {
            method: "GET",
            credentials: "include",
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data.payload);
            setImage(data.payload.image);
          } else {
            console.error("Error al obtener el perfil del usuario");
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error.message);
        }
    };

    // Register user
    const handleRegister = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ first_name, last_name, email, password }),
            });
            if (response.ok) {
                alert("Registro realizado con éxito");
                setFirst_name("");
                setLast_name("");
                setEmail("");
                setPassword("");
                router.push("/views/auth/login/about");
            } else {
                alert("Hubo un problema al registrar el usuario");
            }
        } catch (error) {
            console.error("Error al registrar usuario:", error.message);
        }
    };

    // Update user profile
    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            if (first_name) formData.append("first_name", first_name);
            if (last_name) formData.append("last_name", last_name);
            if (image) {
                formData.append("image", {
                    uri: image,
                    type: image.endsWith(".png") ? "image/png" : "image/jpeg",
                    name: `profile.${image.split(".").pop()}`,
                });
            }
            const response = await fetch(`http://localhost:8080/api/users/id`, {
                method: "PATCH",
                body: formData,
                credentials: "include",
            });
            if (response.ok) {
                const updatedUser = await response.json();
                alert("Datos actualizados con éxito");
                setUser(updatedUser.payload);
                setFirst_name("");
                setLast_name("");
                setImage("");
                router.push("/views/users/profile/about");
            } else {
                alert("Hubo un error al actualizar los datos");
            }
        } catch (error) {
            console.error("Error al actualizar los datos:", error.message);
        }
    };

    // Select image from gallery
    const handleSelectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status === "denied") {
                alert("Se necesita acceso a la galería para seleccionar imágenes.");
                Linking.openSettings();
                return;
            }
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: "images",
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.canceled) {
                console.log("Imagen seleccionada:", result.assets[0].uri);
                setImage(result.assets[0].uri);
            } else {
                console.log("No se seleccionó ninguna imagen, se mantiene la anterior.");
            }
        } catch (error) {
            console.error("Error al seleccionar imagen:", error.message);
        }
    };    

    return (
        <AuthContext.Provider
            value={{
                logged,
                setLogged,
                handleLogin,
                handleLogout,
                handleProfile,
                email,
                setEmail,
                password,
                setPassword,
                user,
                handleRegister,
                first_name,
                setFirst_name,
                last_name,
                setLast_name,
                handleUpdate,
                handleSelectImage,
                image,
                setImage,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;