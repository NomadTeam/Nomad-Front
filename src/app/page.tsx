import { SearchBar } from "@/components/search/SearchBar";
import { ImageContainer } from "@/components/search/ImageContainer";
import { CustomSelect } from "@/components/ui/CustomSelect";

export default function Home() {
  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-4">
          <SearchBar />
          <ImageContainer />
          <CustomSelect />
        </div>
      </div>
    </>
  );
}
