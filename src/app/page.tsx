"use client";

import { useState } from "react";
import UiList from "./components/Ui/UiList";
import UiToogle from "./components/Ui/UiToogle";
import { useData } from "./lib/useData";
import UiBlockRegions from "./components/Ui/UiBlockRegions";

export default function Home() {
  const { items, regions } = useData();
  const [label, setLabel] = useState<string>("all");

  const filteredItems = items.filter((item) =>
    label === "all" ? true : item.label.toLowerCase() === label
  );

  const options = [
    { name: "Alles", value: "all" },
    { name: "Sport", value: "sport" },
    { name: "Voetbal", value: "voetbal" },
  ];

  return (
    <div className="mt-2 grid-container">
      <UiBlockRegions regions={regions} />
      <div className="items flex flex-col gap-4">
        <UiToogle options={options} setOption={setLabel} label={label} />
        <UiList items={filteredItems} />
      </div>
    </div>
  );
}
