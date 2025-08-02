import { useState, useEffect, useContext, createContext } from 'react';

import { createClient, type Session } from '@supabase/supabase-js';

// * context
const authContext = createContext<AuthContext | null>(null);

// * components
import LoginForm from '@/components/LoginForm';

// * types
type AuthContext = { session: Session | null };

type AuthContextProviderProps = { children: React.ReactNode };

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [pending, setPending] = useState<boolean>(true);

  const context: AuthContext = { session };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setPending(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <authContext.Provider value={context}>
      {pending ? null : session ? children : <LoginForm />}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('`useAuth` should be used within the <AuthContextProvider />');
  }

  return context;
};

export default AuthContextProvider;
