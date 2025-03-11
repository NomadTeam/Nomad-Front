"use client";

import { useEffect, useState } from "react";
import { FaExclamationCircle, FaRedo } from "react-icons/fa";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    console.error(error);
    setTimeout(() => setFadeIn(true), 100);
  }, [error]);

  const animationClass = fadeIn
    ? "translate-y-0 opacity-100"
    : "translate-y-4 opacity-0";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div
        className={`w-full max-w-md transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 ${
          animationClass
        }`}
      >
        <div className="mb-6 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <FaExclamationCircle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <h2 className="mb-2 text-center text-xl font-medium text-gray-900">
          문제가 발생했습니다
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          {error.message || "요청을 처리하는 중에 오류가 발생했습니다."}
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-95"
          >
            <FaRedo className="mr-2 h-4 w-4" />
            다시 시도하기
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          문제가 계속되면 고객 지원팀에 문의하세요
        </p>
      </div>
    </div>
  );
}
