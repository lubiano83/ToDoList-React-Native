import { View } from "react-native";
import LogoutButton from "./LogoutButton";

export default function ProfileData({ setLogged }) {

    const getUserById = async() => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/id`, { method: "GET" });
            const data = await response.json();
            console.log(data)

            

        } catch (error) {
            
        }

    };
    return (
        <View className="justify-between h-full px-4">
            <View>

            </View>
            <LogoutButton setLogged={setLogged} />
        </View>
    )
};