import Link from "next/link";

const items = [
  { id: "123e4567-e89b-12d3-a456-426614174000", title: "아이템 1" },
  { id: "987e6543-e21b-12d3-a456-426614174111", title: "아이템 2" },
];

export default function ListPage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-3xl font-bold">리스트 정렬 페이지</h2>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="p-2">
            <Link href={`/detail/${item.id}`} className="text-blue-500">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
