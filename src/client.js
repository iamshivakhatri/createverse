import { createClient } from '@supabase/supabase-js';

// Define your Supabase Project URL and API Key
const URL = 'https://jiczxtcxqkilwiflqltk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppY3p4dGN4cWtpbHdpZmxxbHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExOTkxMjcsImV4cCI6MjAwNjc3NTEyN30.Idu3nCiwGSPfzMiRf8SEQbSMUCh9xPsVn4OJ0JmnrvU';

// Create a Supabase client instance
const supabase = createClient(URL, API_KEY);

// Export the supabase client instance
export default supabase;