import { Slot, SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';

import ApolloProvider from '../context/apollo';
import { Provider as AuthContext } from '../context/auth';
import useCachedResources from '@/hooks/useCachedResources';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { appIsReady, onLayoutRootView } = useCachedResources();

  if (!appIsReady) return null;

  console.log('test', process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
  console.log('test');

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}>
        <AuthContext>
          <ApolloProvider>
            <Slot />
          </ApolloProvider>
        </AuthContext>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
