import React, { useState } from 'react';
import FormHeader from '@/components/FormHeader';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '@/components/FormInput';
import useAuthStore from '@/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/userAuth';

const Login = () => {
  const setUser = useAuthStore((s) => s.setUser);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const userData = data.session?.user ?? null;
      if (userData) {
        setUser(userData);
        alert('로그인 성공!');
        navigate('/');
      } else {
        alert('세션 정보를 찾을 수 없습니다.');
      }
    },
    onError: (err) => {
      alert(err?.message || '로그인에 실패했습니다.');
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    loginMutation.mutate({
      email: userEmail,
      password: userPassword,
    });
  };

  return (
    <div className="flex-center w-screen h-screen bg-gray-100">
      <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-2xl p-10">
        <FormHeader title={'로그인'} />
        <form onSubmit={handleLogin} className="space-y-8">
          <FormInput
            label="이메일"
            id="user_email"
            type={'email'}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일을 입력하세요."
            required
          />
          <FormInput
            label="패스워드"
            id="user_password"
            type={'password'}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            required
          />

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loginMutation.isPending ? '로그인 중...' : '로그인'}
            </button>
          </div>

          <div className="text-center text-gray-700 text-lg mt-4">
            계정이 없나요?{' '}
            <Link to="/signup" className="text-blue-600 font-bold">
              회원가입 하기
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
