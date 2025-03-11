export function LayoutFooter() {
  return (
    <footer className="flex flex-row justify-between bg-gray-50 p-4 shadow-md">
      <section className="space-y-1 text-gray-600">
        <p className="space-x-2">
          <span className="text-xs hover:underline">이용약관</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs hover:underline">개인정보처리방침</span>
        </p>
        <p className="space-x-2">
          <span className="text-xs">고객센터: 1234-5678</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs hover:underline">문의하기</span>
        </p>
        <p className="text-xs text-gray-400">
          &copy; 2024 Nomad, All Rights Reserved
        </p>
      </section>
      <section className="flex">
        <h1 className="text-shadow-lg text-4xl font-extrabold text-gray-800">
          TRIP
        </h1>
      </section>
    </footer>
  );
}
