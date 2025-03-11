"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export const SearchBar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [search, setSearch] = useState("");

  function handleChange(e: InputEvent) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    alert(search);
    setSearch("");
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <>
      {!isScrolled && (
        <section className="relative">
          <input
            value={search}
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full rounded-full border border-[#4682B4] p-3 text-xs focus:ring-2 focus:ring-[#4682B4] focus:outline-none"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="absolute top-3 right-3 cursor-pointer text-[#4682B4]"
          >
            <FaSearch />
          </button>
        </section>
      )}
      {isScrolled && (
        <div className="absolute top-5 right-0 left-0 z-10">
          <section className="relative px-4">
            <input
              value={search}
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full rounded-full border border-[#4682B4] bg-white p-3 text-xs focus:ring-2 focus:ring-[#4682B4] focus:outline-none"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="absolute top-3 right-12 cursor-pointer text-[#4682B4]"
            >
              <FaSearch />
            </button>
          </section>
        </div>
      )}
    </>
  );
};
