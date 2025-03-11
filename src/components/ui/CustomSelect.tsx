"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";

type OptionType = {
  value: string;
  label: string;
  link: string;
};

export const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const router = useRouter();

  function handleNavigate(newValue: OptionType | null) {
    setSelectedOption(newValue);
    router.push(newValue?.link || "/");
  }

  return (
    <div className="w-2/3">
      <Select
        value={selectedOption}
        onChange={handleNavigate}
        options={options}
        placeholder="정렬 방식 선택"
      />
    </div>
  );
};

const options: OptionType[] = [
  { value: "option1", label: "최신순", link: "/" },
  { value: "option2", label: "조회수순", link: "/view" },
];
