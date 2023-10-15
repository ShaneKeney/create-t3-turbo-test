import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@apollo/client';

import { useAuth } from '../../context/auth';
import { HEALTH_CHECK } from '../../graphql/queries/healthcheck';

export default function Register() {
  // const { signIn } = useAuth();
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>REGISTER SCREEN: </Text>
      <Link href="/login">Sign In</Link>
    </View>
  );
}
