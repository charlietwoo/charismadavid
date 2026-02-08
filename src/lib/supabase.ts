import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ChallengeDay = {
  id: number;
  title: string;
  description: string;
  category: string;
  created_at: string;
};

export type UserProgress = {
  id: string;
  user_id: string;
  day_number: number;
  completed: boolean;
  completion_type: 'photo' | 'description' | null;
  completion_text: string | null;
  photo_url: string | null;
  completed_at: string | null;
  created_at: string;
};
