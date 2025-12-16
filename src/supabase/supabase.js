import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
console.log('ENV URL:', supabaseUrl);
console.log('ENV KEY exists:', !!supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey);
