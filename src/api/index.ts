import { supabase } from '@/context/AuthContext';

const TABLE = 'transactions';
const DB = supabase.from(TABLE);

export const getTransactions = async (user_id: string) => {
  const query = supabase.from(TABLE).select('*');
  const { data, error } = await query;

  return { data, error };
};
