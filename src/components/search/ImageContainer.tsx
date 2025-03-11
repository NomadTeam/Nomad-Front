import Image from "next/image";

export const ImageContainer = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <>
      {!isScrolled && (
        <div className="relative h-40 w-full rounded-lg bg-gray-200">
          <Image src="/logo.png" alt="logo" fill className="rounded-lg" />
        </div>
      )}
      {isScrolled && (
        <div className="relative h-20 w-full rounded-lg bg-gray-200">
          <Image src="/logo.png" alt="logo" fill className="rounded-lg" />
        </div>
      )}
    </>
  );
};
