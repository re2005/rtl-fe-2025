"use client";

import { useState } from "react";
import UiList from "./components/UiList";
import UiToogle from "./components/UiToogle";
import { useData } from "./lib/useData";

export default function Home() {
  const { items } = useData();
  const [label, setLabel] = useState<string>("all");

  const filteredItems = items.filter((item) =>
    label === "all" ? true : item.label.toLowerCase() === label
  );

  const options = [
    { name: "All items", value: "all" },
    { name: "Sport", value: "sport" },
    { name: "Voetbal", value: "voetbal" },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-end mb-4">
        <UiToogle options={options} setLabel={setLabel} label={label} />
      </div>
      <UiList items={filteredItems} />
    </div>
  );
}
