import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';
import { getTransactions } from '@/api';

import ExpenseForm from '@/components/ExpenseForm';

const HomePage = () => {
  const { session } = useAuth();
  if (!session) return null;

  useEffect(() => {
    (async () => {
      const resp = await getTransactions(session.user.id);
      console.log(resp);
    })();
  });

  return (
    <div>
      <header className='border-b border-gray-600/50'>
        <div className='container mx-auto flex items-center justify-between gap-x-4 p-4 xl:max-w-7xl'>
          <h1 className='text-lg font-bold'>Expense Tracker</h1>

          <ExpenseForm />
        </div>
      </header>

      <main className='container mx-auto p-4 xl:max-w-7xl'></main>
    </div>
  );
};

export default HomePage;
