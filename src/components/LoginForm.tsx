import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// * context
import { supabase } from '@/context/AuthContext';

const LoginForm = () => {
  return (
    <div className='fixed top-1/2 left-1/2 w-full max-w-sm -translate-1/2'>
      <Auth
        theme='dark'
        providers={[]}
        showLinks={false}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default LoginForm;
