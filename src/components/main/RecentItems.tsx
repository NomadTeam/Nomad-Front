import { FaThumbsUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function RecentItems() {
  return (
    <div className="flex gap-4">
      {recentSearch.map((search) => (
        <Link
          key={search.id}
          href={search.link}
          className="flex flex-col gap-2 rounded border border-[#4682B4] bg-white p-2 text-start shadow-md hover:border-blue-500"
        >
          <div className="relative h-20 w-full rounded">
            <Image src={search.image} alt={search.title} fill />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="max-w-[100px] min-w-[100px]">
              <h1 className="truncate font-stretch-normal">
                {search.title.repeat(10)}
              </h1>
            </div>
            <p className="flex items-center gap-1 rounded-full border border-gray-300 bg-gray-100 px-2 text-stone-800">
              <FaThumbsUp className="text-amber-300" /> {search.likeCount}
            </p>
          </div>
          <span className="text-sm text-gray-500">{search.tag}</span>
        </Link>
      ))}
    </div>
  );
}

const recentSearch = [
  {
    id: 1,
    image: "/next.svg",
    title: "남산 타워",
    likeCount: 10,
    tag: "관광지",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: "/next.svg",
    title: "오사카",
    likeCount: 10,
    tag: "관광지",
    link: "https://www.google.com",
  },
  {
    id: 3,
    image: "/next.svg",
    title: "피사의 사탑",
    likeCount: 10,
    tag: "관광지",
    link: "https://www.google.com",
  },
];
