import { Image } from 'react-native';
import useAuth from '../hooks/useAuth';

export default function UserImage({ size }) {

    const { user } = useAuth();

    return (
        <Image source={{ uri: user ? user.image : "" }} height={size} width={size} alt='user image' className="rounded-full bg-white" />
    )
}