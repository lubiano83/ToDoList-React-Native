import { createContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ logged, setLogged ] = useState(false);
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const router = useRouter();

    useEffect(() => {
        if (logged === false) {
            handleLogout(); // Llama a la función para desconectar al usuario
            alert("Logout realizado con éxito");
        }
    }, [logged]); // Se ejecutará cada vez que 'logged' cambie

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
                alert("Login realizado con exito");
                setLogged(true);
                setEmail("");
                setPassword("");
                router.push("/");
            } else {
                alert("Hubo un problema al realizar el login");
            }
          } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    }

    const handleLogout = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/logout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include" // Permite el envío de cookies
            });
            if (response.ok) {
                await response.json();
                setLogged(false);
                router.push("/");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ logged, setLogged, handleLogin, handleLogout, email, setEmail, password, setPassword }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;