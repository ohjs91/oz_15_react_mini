import React, { useEffect, useState } from 'react';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    // console.log(JSON.parse(user));
    setUserInfo(JSON.parse(user));
  }, []);
  console.log(userInfo);
  return (
    <div className="mypage p-12">
      <h2 className="text-3xl font-bold mb-8">Mypage</h2>
      <p>이메일: {userInfo?.user_metadata.email}</p>
      <p>이름: {userInfo?.user_metadata.user_name}</p>
    </div>
  );
};

export default Mypage;
