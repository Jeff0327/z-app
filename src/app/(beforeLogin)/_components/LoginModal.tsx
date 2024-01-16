"use client";

function LoginModal() {
  return (
    <div className="text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 box-border border-4 bg-black  rounded-2xl border-black z-0">
      <h2>Z 가입하기</h2>
      <input
        className="text-gray border py-2 rounded-2xl mx-20 my-5"
        placeholder="휴대폰 번호,이메일 주소 또는 사용자 아이디"
      />
      <button className="bg-white p-2 rounded-3xl my-5 mx-20">
        <h3 className="text-black">다음</h3>
      </button>
      <button className="border-white p-2 rounded-3xl border mx-20">
        <h3>비밀번호를 잊으셧나요?</h3>
      </button>
    </div>
  );
}

export default LoginModal;
