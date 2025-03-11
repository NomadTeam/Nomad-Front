"use client";

import { useEffect, useState } from "react";
import { ImageContainer } from "../search/ImageContainer";
import { SearchBar } from "../search/SearchBar";

export const SearchContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isScrolled && (
        <div className="flex flex-col gap-4">
          <SearchBar isScrolled={isScrolled} />
          <ImageContainer isScrolled={isScrolled} />
        </div>
      )}
      {isScrolled && (
        <div className="relative flex flex-col gap-4">
          <SearchBar isScrolled={isScrolled} />
          <ImageContainer isScrolled={isScrolled} />
        </div>
      )}
    </>
  );
};
