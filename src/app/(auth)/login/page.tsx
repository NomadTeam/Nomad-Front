export default function LoginPage() {
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-3xl font-bold mb-4">로그인</h2>
      <form className="flex flex-col space-y-4">
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
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          로그인
        </button>
      </form>
    </div>
  );
}
