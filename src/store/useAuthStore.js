import { create } from 'zustand';
// import { supabase } from '@/supabase/supabase';

const loadInitialState = () => {
  const initialValue = localStorage.getItem('userInfo');
  const user = initialValue ? JSON.parse(initialValue) : null;
  // console.log(user);
  return { user, isLogin: !!user };
};

const useAuthStore = create((set, get) => ({
  ...loadInitialState(),

  setUser: (user) => {
    if (user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    } else {
      localStorage.removeItem('userInfo');
    }

    set({ user, isLogin: !!user });
  },

  clearUser: () => {
    localStorage.removeItem('userInfo');
    set({ user: null, isLogin: false });
  },
}));

export default useAuthStore;
