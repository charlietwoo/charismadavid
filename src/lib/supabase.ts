import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qlicplnoitestitqfsuc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaWNwbG5vaXRlc3RpdHFmc3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTQ0NDYsImV4cCI6MjA4NjEzMDQ0Nn0.C7SmTdHXI1I_hx72RyuO3tU73wYpKfmy3EFjJObdYmg';

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
