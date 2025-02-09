import { Image } from 'react-native';
import useAuth from '../hooks/useAuth';

export default function TeamImage({ image }) {

    const { user } = useAuth();

    return (
        <Image source={{ uri: image }} height={30} width={30} alt='user image' className="rounded-full bg-black" />
    )
}