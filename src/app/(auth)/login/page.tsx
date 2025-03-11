export default function LoginPage() {
  return (
    <div className="container mx-auto max-w-md p-4">
      <h2 className="mb-4 text-3xl font-bold">로그인</h2>
      <form className="flex flex-col space-y-4">
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
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          로그인
        </button>
      </form>
    </div>
  );
}
