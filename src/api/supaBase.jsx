import { createClient } from '@supabase/supabase-js'

const supabaseUrl = `https://amdcusmmonqxxfxbtvji.supabase.co`
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZGN1c21tb25xeHhmeGJ0dmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxNDUxOTAsImV4cCI6MjAwNDcyMTE5MH0.6FwJuDZTzJzEZUNxrDqSWqenf4tq5GFUFdghSm-11FA`

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;