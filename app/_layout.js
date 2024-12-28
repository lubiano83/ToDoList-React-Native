import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { View } from "react-native";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from 'react';
import LoginView from './views/auth/login/about';
import "../global.css";

export default function Layout() {

     const insets = useSafeAreaInsets();
     const [ logged, setLogged ] = useState(false);

    return (
        <SafeAreaProvider>
            <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="flex-1">
                <StatusBar style="auto" />
                <View>
                    <Navbar setLogged={setLogged} />
                </View>
                <View className="flex-1">
                    { logged ?  <Slot /> : <LoginView setLogged={setLogged} /> }
                </View>
                <View>
                    <Footer />
                </View>
            </View>
        </SafeAreaProvider>
    )
}