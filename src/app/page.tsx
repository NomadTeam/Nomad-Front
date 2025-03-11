import { SearchBar } from "@/components/search/SearchBar";
import { ImageContainer } from "@/components/search/ImageContainer";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { RecentItems } from "@/components/main/RecentItems";
import { MdPick } from "@/components/main/MdPick";

export default function Home() {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4">
        <SearchBar />
        <ImageContainer />
        <CustomSelect />
      </div>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">최근 검색이 많았어요!</h1>
        <RecentItems />
      </div>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">MD PICK!</h1>
        <MdPick />
      </div>
    </div>
  );
}
