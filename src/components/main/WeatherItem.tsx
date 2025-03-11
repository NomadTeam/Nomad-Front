import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";
import Link from "next/link";
import { WEATHER_DATA } from "@/lib/constant";

export function WeatherItem() {
  return (
    <div className="flex flex-col gap-4">
      {WEATHER_DATA.map((item) => (
        <Link key={item.id} href={item.link}>
          <div className="relative h-40 w-full rounded border border-[#4682B4] bg-black/10 shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-fill"
            />
            <div className="absolute bottom-3 left-2 w-full">
              <span className="rounded-lg border border-blue-500 bg-white px-2 py-1 text-base shadow-md">
                {item.title}
              </span>
            </div>
            <div className="absolute top-3 right-2 w-fit">
              <span className="flex items-center gap-1 rounded-full border border-gray-300 bg-gray-100 px-2 shadow-md">
                <FaThumbsUp className="text-amber-400" size={12} />
                <span className="font-medium text-gray-700">
                  {item.likeCount}
                </span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
