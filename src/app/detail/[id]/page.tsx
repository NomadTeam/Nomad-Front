"use client";

import { useParams } from "next/navigation";

export default function DetailPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">상세 페이지</h2>
      <p>상세 페이지 ID: {id}</p>
    </div>
  );
}
