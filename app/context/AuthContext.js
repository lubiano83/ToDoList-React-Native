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
    const router = useRouter();
    
    useEffect(() => {
        if(logged === true) {
            handleProfile(); // Llama a `handleProfile` cuando el componente se monta
        }
    }, [logged]);

    useEffect(() => {
        if (logged === false) {
            handleLogout(); // Llama a la función para desconectar al usuario
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
                credentials: "include" // Permite el envío de cookies
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

    return (
        <AuthContext.Provider value={{ logged, setLogged, handleLogin, handleLogout, email, setEmail, password, setPassword, user, handleRegister, first_name, setFirst_name, last_name, setLast_name }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;