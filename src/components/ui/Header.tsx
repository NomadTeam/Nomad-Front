import Link from "next/link";
import { FaCog } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="font-cursive text-2xl text-[#4682B4]">
          Key-Nomad
        </Link>
        <Link href="/mypage" className="text-[#4682B4]">
          <FaCog size={24} />
        </Link>
      </div>
    </header>
  );
};
