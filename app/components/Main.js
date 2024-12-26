import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Todos from './todos/Todos';

export default function Main() {

    const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="h-full w-full justify-between items-center">
      <View className="w-full">
        <Navbar />
      </View>
      <View className="flex-1 w-full pt-3 bg-gray-400">
        <Todos />
      </View>
      <View className="w-full">
        <Footer />
      </View>
    </View>
  );
}