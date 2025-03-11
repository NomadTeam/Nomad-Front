import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 Not Found</h1>
      <p className="mb-4">찾을 수 없는 페이지입니다.</p>
      <Link href="/" className="text-blue-500">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
