import { useRouter, useSegments } from 'expo-router';
import { useEffect, createContext, useContext, useState } from 'react';

interface AuthContext {
  signIn: () => void;
  signOut: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContext>({
  signIn: () => {},
  signOut: () => {},
  user: null
});

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: User | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    // We check this because the location that we will take users that are signed in is the play screen.  Otherwise the below
    // logic will redirect on every user update change.
    const signedIn = segments[0] === 'play';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/login');
    } else if (user && inAuthGroup) {
      // // Signed in, so redirect to the play screen.
      router.replace('/play/');
    }
  }, [user, segments]);
}

export function Provider(props: { children: React.ReactNode }) {
  const [user, setAuth] = useState<User | null>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // TODO: Change this to officially sign in the user and get user information
          setAuth({ name: 'Guest User' });
        },
        signOut: () => setAuth(null),
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

interface User {
  name: string;
}
