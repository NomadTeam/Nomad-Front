"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    alert("에러가 발생했습니다.");
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">문제가 발생했습니다.</h2>
      <p className="mb-4 text-red-500">{error.message}</p>
      <button onClick={reset} className="p-2 bg-blue-500 text-white rounded">
        다시 시도하기
      </button>
    </div>
  );
}
