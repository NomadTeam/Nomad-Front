"use client";

import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import { SwiperContainer } from "@/components/ui/SwiperContainer";
import { RECENT_SEARCH } from "@/lib/constant";

export function RecentItems() {
  return (
    <SwiperContainer>
      {RECENT_SEARCH.map((search) => (
        <SwiperSlide key={search.id} className="w-auto max-w-[200px]">
          <Link
            href={search.link}
            className="flex flex-col gap-2 rounded border border-[#4682B4] bg-white p-2 text-start shadow-md hover:border-blue-500"
          >
            <div className="relative h-20 w-full rounded bg-black/10">
              <Image
                src={search.image}
                alt={search.title}
                fill
                className="object-fill"
              />
            </div>
            <div className="flex items-center">
              <div className="max-w-full min-w-[100px]">
                <h1 className="truncate font-stretch-normal">{search.title}</h1>
              </div>
              <div className="absolute top-19 right-2">
                <p className="flex items-center gap-1 rounded-full bg-gray-100 px-2 shadow-md">
                  <FaThumbsUp className="text-amber-300" /> {search.likeCount}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{search.tag}</span>
          </Link>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
}
