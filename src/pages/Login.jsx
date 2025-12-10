import React, { useState } from 'react';
import FormHeader from '@/components/FormHeader';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '@/components/FormInput';
import useAuthStore from '@/store/useAuthFetch';
const Login = () => {
  const { fetchLoginUser } = useAuthStore();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    fetchLoginUser({
      email: userEmail,
      password: userPassword,
      navigate: navigate,
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
              className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition"
            >
              로그인
            </button>

            {/* <button className="cursor-pointer w-full flex items-center justify-center gap-3 bg-yellow-400 text-black py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition">
              카카오 로그인
            </button>

            <button className="cursor-pointer w-full flex items-center justify-center gap-3 border py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
              구글 로그인
            </button> */}
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
