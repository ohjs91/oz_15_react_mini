import React, { useState } from 'react';
import FormHeader from '@/components/FormHeader';
import FormInput from '@/components/FormInput';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('폼제출');
  };
  return (
    <div className="flex-center w-screen h-screen bg-gray-100">
      <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-2xl p-10">
        <FormHeader title={'회원가입'} />
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormInput
            label="이름"
            id="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="이름을 입력하세요."
            required
          />
          <FormInput
            label="이메일"
            id="user_email"
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
          <FormInput
            label="패스워드 확인"
            id="user_password2"
            type={'password'}
            value={userPassword2}
            onChange={(e) => setUserPassword2(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            required
          />
          <div className="space-y-4">
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
