import { FaThumbsUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const MD_PICK = {
  image: "/next.svg",
  title: "경복궁 ",
  tag: "관광지",
  address: "서울특별시 종로구 세종로 1-1",
  likeCount: 50,
  recommendComment: `"요즘 같이 느러지는 날 경치 좋은 장소를 추천합니다!"`,
  link: "https://www.google.com",
};

export function MdPick() {
  return (
    <Link href={MD_PICK.link}>
      <div className="flex gap-4 rounded border border-[#4682B4] bg-white p-2 shadow-md hover:border-blue-500">
        <div className="relative h-56 w-[40%] overflow-hidden rounded border border-gray-300">
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
                <span className="font-medium text-gray-700">
                  {MD_PICK.likeCount}
                </span>
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
