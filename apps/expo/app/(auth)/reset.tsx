import { Link } from 'expo-router';
import { Text, View } from 'react-native';
// import { useAuth } from "../../context/auth";

export default function ResetAccount() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>RESET PASSWORD SCREEN:</Text>
      <Link href="/login">Sign In</Link>
    </View>
  );
}
