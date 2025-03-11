import { SearchBar } from "@/components/search/SearchBar";
import { ImageContainer } from "@/components/search/ImageContainer";
import { CustomSelect } from "@/components/ui/CustomSelect";

export function HeaderContainer() {
  return (
    <div className="flex flex-col gap-4">
      <SearchBar />
      <ImageContainer />
      <div className="flex w-full justify-end">
        <CustomSelect />
      </div>
    </div>
  );
}
