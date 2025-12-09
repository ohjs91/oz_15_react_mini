import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLogin(true);
    }
  }, []);

  // 로그인
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const session = data.session;
    const userData = session?.user ?? null;

    if (userData) {
      localStorage.setItem('userInfo', JSON.stringify(userData));
      setUser(userData);
      setIsLogin(true);
    }
    return userData;
  };

  // 로그아웃
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    localStorage.removeItem('userInfo');
    setUser(null);
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
