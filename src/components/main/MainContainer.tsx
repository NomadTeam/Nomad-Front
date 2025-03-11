import { RecentItems } from "@/components/main/RecentItems";
import { MdPick } from "@/components/main/MdPick";
import { WeatherItem } from "@/components/main/WeatherItem";
import { SECTION_TITLE } from "@/lib/constant";

export function MainContainer() {
  return (
    <>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">
          {SECTION_TITLE.recentSearch}
        </h1>
        <RecentItems />
      </div>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">{SECTION_TITLE.mdPick}</h1>
        <MdPick />
      </div>
      <div className="pt-4">
        <h1 className="pb-4 text-lg font-semibold">{SECTION_TITLE.weather}</h1>
        <WeatherItem />
      </div>
    </>
  );
}
