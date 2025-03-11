import { RecentItems } from "@/components/main/RecentItems";
import { MdPick } from "@/components/main/MdPick";
import { WeatherItem } from "@/components/main/WeatherItem";
import { SECTION_TITLE } from "@/lib/constant";
import { cn } from "@/lib/utils";

export function MainContainer() {
  const h1Style = "pb-4 text-lg font-semibold";

  return (
    <>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">
          {SECTION_TITLE.recentSearch}
        </h1>
        <RecentItems />
      </div>
      <div className="pt-4">
        <h1 className={cn(h1Style)}>{SECTION_TITLE.mdPick}</h1>
        <MdPick />
      </div>
      <div className="pt-4">
        <h1 className={cn(h1Style)}>{SECTION_TITLE.weather}</h1>
        <WeatherItem />
      </div>
    </>
  );
}
