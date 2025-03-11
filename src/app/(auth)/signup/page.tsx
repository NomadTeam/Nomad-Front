export default function SignupPage() {
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-3xl font-bold mb-4">회원가입</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="이름" className="p-2 border rounded" />
        <input
          type="email"
          placeholder="이메일"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-green-500 text-white rounded">
          회원가입
        </button>
      </form>
    </div>
  );
}
