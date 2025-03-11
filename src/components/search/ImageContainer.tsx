import Image from "next/image";

export const ImageContainer = () => {
  return (
    <div className="relative h-40 w-full rounded-lg bg-gray-200">
      <Image src="/vercel.svg" alt="logo" fill className="rounded-lg" />
    </div>
  );
};
