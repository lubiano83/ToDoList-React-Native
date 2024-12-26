import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { View } from "react-native";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "../global.css";

export default function Layout() {

     const insets = useSafeAreaInsets();

    return (
        <SafeAreaProvider>
            <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="flex-1">
                <StatusBar style="auto" />
                <View>
                    <Navbar />
                </View>
                <View className="flex-1">
                    <Slot />
                </View>
                <View>
                    <Footer />
                </View>
            </View>
        </SafeAreaProvider>
    )
}