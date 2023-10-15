import { View, Text } from 'react-native';
import { useAuth } from '../../context/auth';
import MapView from 'react-native-maps';

export default function Play() {
  const { signIn } = useAuth();

  return (
    <View className="flex flex-1">
      <MapView className="flex flex-1" />
    </View>
  );
}
