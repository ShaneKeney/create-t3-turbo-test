import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
// import { useAuth } from "../../context/auth";
import { Link } from 'expo-router';
import { useAuth } from '../../context/auth';

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();

  return (
    <View className="flex items-center justify-center flex-1 bg-background dark:bg-backgroundDark">
      <Text>ON LOGIN SCREEN:</Text>
      <Link href="/">Sign Up</Link>
      <Text onPress={() => signIn()}>Fake Sign In</Text>
      <Link href="/">Go to Play</Link>
      <Link href="/reset">Reset Account</Link>
      <Link href="/testTheme">App Theme</Link>
    </View>
  );
}
