"use client";

import { useState, useEffect } from "react";
import UiList from "./components/UiList";
import UiToogle from "./components/UiToogle";
import { useData } from "./lib/useData";

export default function Home() {
  const { items } = useData();
  const defaultLabel = globalThis?.localStorage?.getItem("label") || "all";
  const [label, setLabel] = useState<string>(defaultLabel);

  useEffect(() => {
    if (typeof window !== "undefined") {
      globalThis.localStorage.setItem("label", label);
    }
  }, [label]);

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
