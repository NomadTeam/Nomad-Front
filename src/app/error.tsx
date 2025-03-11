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
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">문제가 발생했습니다.</h2>
      <p className="mb-4 text-red-500">{error.message}</p>
      <button onClick={reset} className="rounded bg-blue-500 p-2 text-white">
        다시 시도하기
      </button>
    </div>
  );
}
