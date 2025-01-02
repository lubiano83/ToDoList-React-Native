import { createContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [ logged, setLogged ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ first_name, setFirst_name ] = useState();
    const [ last_name, setLast_name ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ image, setImage ] = useState();
    const [ token, setToken ] = useState();
    const router = useRouter();
    
    useEffect(() => {
        if(logged === true) {
            handleProfile();
        } else {
            handleLogout();
        }
    }, [logged]);

    const handleLogin = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            });
            
            if (response.ok) {
                await response.json();
                setLogged(true);
                setEmail("");
                setPassword("");
                alert("Login realizado con exito");
                router.push("/");
            } else {
                alert("Hubo un problema al realizar el login");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }
    
    const handleLogout = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/logout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
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
    
    const handleProfile = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/id`, {
                method: "GET",
                credentials: "include",
            });
            const data = await response.json();
            const user = data.payload;
            setUser(user);
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error.message);
        }
    };
    
    const handleRegister = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({ first_name, last_name, email, password })
            });
      
            if (response.ok) {
                await response.json();
                alert("Registro realizado con exito");
                setFirst_name("");
                setLast_name("");
                setEmail("");
                setPassword("");
                router.push("/views/auth/login/about");
            } else {
                alert("Hubo un problema al registrar un usuario");
            }
          } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            if (first_name) formData.append("first_name", first_name);
            if (last_name) formData.append("last_name", last_name);
            if (image) {
                formData.append("image", {
                    uri: image,
                    type: image.endsWith(".png") ? "image/png" : "image/jpeg",
                    name: `profile.${image.split(".").pop()}`
                });
            }
            const response = await fetch(`http://localhost:8080/api/users/id`, { 
                method: "PATCH",
                body: formData,
                credentials: "include" 
            });
            if (response.ok) {
                const updatedUser = await response.json();
                alert("Datos actualizados con éxito");
                setUser(updatedUser.payload);
                setFirst_name("");
                setLast_name("");
                setImage("");
                router.push("/views/auth/profile/about")
            } else {
                const errorData = await response.json();
                alert(`Error al actualizar los datos: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error al actualizar los datos:", error.message);
        }
    };    

    return (
        <AuthContext.Provider value={{ logged, setLogged, handleLogin, handleLogout, email, setEmail, password, setPassword, user, handleRegister, first_name, setFirst_name, last_name, setLast_name, handleUpdate, image, setImage }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;