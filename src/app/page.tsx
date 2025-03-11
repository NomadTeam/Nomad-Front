import { SearchContainer } from "@/components/ui/SearchContainer";

export default function Home() {
  return (
    <div className="w-full p-4">
      <header
        className="fixed top-20"
        style={{ width: "calc(100% - 2rem)", maxWidth: "calc(412px)" }}
      >
        <SearchContainer />
      </header>
    </div>
  );
}
