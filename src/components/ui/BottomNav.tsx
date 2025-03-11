"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaHeart, FaBars, FaUser } from "react-icons/fa";

export function BottomNav() {
  const pathname = usePathname();

  function setActive(path: string) {
    return pathname === path ? "text-[#4682B4]" : "text-gray-500";
  }

  return (
    <footer className="fixed right-0 bottom-0 left-0 mx-auto max-w-[448px] border border-gray-200 bg-white py-3">
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="flex w-16 flex-col items-center">
          <FaHome size={24} className={`${setActive("/")}`} />
          <span className="pt-1 text-xs">홈</span>
        </Link>
        <Link href="/likes" className="flex w-16 flex-col items-center">
          <FaHeart size={24} className={`${setActive("/likes")}`} />
          <span className="pt-1 text-xs">찜</span>
        </Link>
        <Link href="/categories" className="flex w-16 flex-col items-center">
          <FaBars size={24} className={`${setActive("/categories")}`} />
          <span className="pt-1 text-xs">카테고리</span>
        </Link>
        <Link href="/mypage" className="flex w-16 flex-col items-center">
          <FaUser size={24} className={`${setActive("/mypage")}`} />
          <span className="pt-1 text-xs">프로필</span>
        </Link>
      </div>
    </footer>
  );
}
