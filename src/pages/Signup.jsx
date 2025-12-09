import React, { useState } from 'react';
import FormHeader from '@/components/FormHeader';
import FormInput from '@/components/FormInput';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const [vali, setVali] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //유효성 검사
  const validation = () => {
    const newVali = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
    let isValid = true;
    // 이름 2글자 이상
    if (userName.length < 2) {
      newVali.name = '이름은 2글자 이상이어야 합니다.';
      isValid = false;
    }
    // 이메일 형식
    if (!emailRegex.test(userEmail)) {
      newVali.email = '유효한 이메일 형식을 입력해주세요.';
      isValid = false;
    }
    // 비밀번호 8자 이상
    if (userPassword.length < 8) {
      newVali.password = '비밀번호는 8자 이상이어야 합니다.';
      isValid = false;
    }
    // 비밀번호 비밀번호 확인 체크
    if (userPassword !== userPassword2) {
      newVali.password2 = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }
    setVali(newVali);
    return isValid;
  };

  //회원가입 서브밋
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return;
    console.log('Sending user_name:', userName);
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          user_name: userName,
        },
      },
    });

    if (authError) {
      alert(authError.message);
      return;
    }

    const { error: insertError } = await supabase.from('users').insert({
      email: userEmail,
      name: userName,
    });

    if (insertError) {
      alert(insertError.message);
      return;
    }

    alert('회원가입 성공!');
    navigate('/');
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
            vali={vali.name}
          />
          <FormInput
            label="이메일"
            id="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일을 입력하세요."
            required
            vali={vali.email}
          />
          <FormInput
            label="패스워드"
            id="user_password"
            type={'password'}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            required
            vali={vali.password}
          />
          <FormInput
            label="패스워드 확인"
            id="user_password2"
            type={'password'}
            value={userPassword2}
            onChange={(e) => setUserPassword2(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            required
            vali={vali.password2}
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
