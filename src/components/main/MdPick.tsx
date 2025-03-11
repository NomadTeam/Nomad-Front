import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";
import { MD_PICK } from "@/lib/constant";

export function MdPick() {
  return (
    <Link href={MD_PICK.link}>
      <div className="flex gap-4 rounded border border-[#4682B4] bg-white p-2 shadow-md hover:border-blue-500">
        <div className="relative h-56 w-[40%] overflow-hidden rounded bg-black/10">
          <Image
            src={MD_PICK.image}
            alt={MD_PICK.title}
            fill
            className="object-fill"
          />
        </div>
        <div className="w-[60%]">
          <h2 className="max-w-[200px] truncate text-xl font-semibold text-gray-900">
            {MD_PICK.title}
          </h2>
          <p className="line-clamp-3 max-w-[200px] pt-1 text-sm text-gray-500">
            {MD_PICK.address}
          </p>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center pt-4">
              <span className="flex items-center gap-1 rounded-full border border-gray-300 bg-gray-100 px-2">
                <FaThumbsUp className="text-amber-400" size={12} />
                {MD_PICK.likeCount}
              </span>
            </div>
            <p className="pt-2 text-base text-gray-600 italic">
              {MD_PICK.recommendComment}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
