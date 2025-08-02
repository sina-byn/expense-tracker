import { useState, useEffect } from "react";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient, type Session } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type AppProps = { children: React.ReactNode };

const App = ({ children }: AppProps) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-1/2 w-full max-w-sm">
        <Auth
          theme="dark"
          providers={[]}
          showLinks={false}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    );
  } else {
    return children;
  }
};

export default App;
