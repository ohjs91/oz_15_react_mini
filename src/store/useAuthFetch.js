import { create } from 'zustand';
import { supabase } from '@/supabase/supabase';

const loadInitialState = () => {
  const initialValue = localStorage.getItem('userInfo');
  return { isLogin: initialValue ? true : false };
};

const useAuthStore = create((set, get) => ({
  ...loadInitialState(),
  //회원가입 액션
  fetchJoinUser: async ({ name, email, password, navigate }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          user_name: name,
        },
      },
    });
    console.error(error);
    alert('회원가입 성공!');
    navigate('/');
    return data.user;
  },

  //로그인 액션
  fetchLoginUser: async ({ email, password, navigate }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.error(error);

    const userData = data.session?.user ?? null;
    if (userData) {
      localStorage.setItem('userInfo', JSON.stringify(userData));
      set({ user: userData, isLogin: true });
      alert('로그인 성공!');
      navigate('/');
    }
    return userData;
  },
  //로그아웃 액션
  fetchLogoutUser: async (navigate) => {
    const { error } = await supabase.auth.signOut();
    console.error(error);
    localStorage.removeItem('userInfo');
    set({ user: null, isLogin: false });
    alert('로그아웃 되었습니다.');
    navigate('/');
  },
}));

export default useAuthStore;
