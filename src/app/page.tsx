import { HeaderContainer } from "@/components/main/HeaderContainer";
import { MainContainer } from "@/components/main/MainContainer";

export default function Home() {
  return (
    <div className="relative w-full p-4">
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}
