import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://tkukblltrntywleijavp.supabase.co/rest/v1/';
const SUPABASE_KEY = 'sb_publishable_mBBU__VK_Zjg-Rlti_SZnA_Us5Nx2XM';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
