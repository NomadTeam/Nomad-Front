export default function SignupPage() {
  return (
    <div className="container mx-auto max-w-md p-4">
      <h2 className="mb-4 text-3xl font-bold">회원가입</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="이름" className="rounded border p-2" />
        <input
          type="email"
          placeholder="이메일"
          className="rounded border p-2"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="rounded border p-2"
        />
        <button type="submit" className="rounded bg-green-500 p-2 text-white">
          회원가입
        </button>
      </form>
    </div>
  );
}
