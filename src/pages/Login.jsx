import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex-center w-screen h-screen bg-gray-100">
      <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-2xl p-10">
        <div className="mb-12 relative text-center">
          <Link to="/">
            <FaArrowLeft
              size={26}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
            />
          </Link>
          <h1 className="text-4xl font-bold">로그인</h1>
        </div>

        <div className="space-y-8">
          <div>
            <label
              htmlFor="login_email"
              className="text-gray-700 font-semibold text-lg"
            >
              이메일
            </label>
            <input
              type="email"
              id="login_email"
              placeholder="이메일을 입력하세요"
              required
              className="form_input mt-2"
            />
            <p className="text-sm mt-2 text-red-500">
              존재하지 않는 이메일 입니다.
            </p>
          </div>

          <div>
            <label
              htmlFor="login_pw"
              className="text-gray-700 font-semibold text-lg"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="login_pw"
              placeholder="비밀번호를 입력하세요"
              required
              className="form_input mt-2"
            />
            <p className="text-sm mt-2 text-red-500">
              비빌번호가 올바르지 않습니다.
            </p>
          </div>
          <div className="space-y-4">
            <button className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition">
              로그인
            </button>

            <button className="cursor-pointer w-full flex items-center justify-center gap-3 bg-yellow-400 text-black py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition">
              카카오 로그인
            </button>

            <button className="cursor-pointer w-full flex items-center justify-center gap-3 border py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
              구글 로그인
            </button>
          </div>

          <div className="text-center text-gray-700 text-lg mt-4">
            계정이 없나요?{' '}
            <Link to="/signup" className="text-blue-600 font-bold">
              회원가입 하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
