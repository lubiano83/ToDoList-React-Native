import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Main from './components/Main';
import "../global.css";

export default function Page() {

  return (
    <SafeAreaProvider>
      <View className="justify-center items-center h-full">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}