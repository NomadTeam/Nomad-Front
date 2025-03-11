import { RecentItems } from "@/components/main/RecentItems";
import { MdPick } from "@/components/main/MdPick";
import { WeatherItem } from "@/components/main/WeatherItem";

const SECTION_TITLE = {
  recentSearch: "최근 검색이 많았어요!",
  mdPick: "MD PICK!",
  weather: "요즘 날씨 여긴 어때?",
};

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
