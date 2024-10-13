"use client";

import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import orderFetcher from "../../../utils/core/fetcher/tableFetcher/orderFetcher";
import { foodOrder } from "../../../utils/typeStorage/foodType";

export default function DemoPage() {
  const [data, setData] = useState<foodOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetcher = new orderFetcher();
      const data = await fetcher.getOrder();
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
