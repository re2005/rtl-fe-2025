"use client";

import React, { useRef, useCallback } from "react";
import UiList from "@/app/components/Ui/UiList";
import { type ItemsRemaped } from "@/app/lib/data-types";
import useDataPagination from "@/app/lib/useDataPagination";

export default function BlockItems({
  items: serverItems,
}: {
  items: ItemsRemaped[];
}) {
  const { goToNextPage, items, loading, hasNextPage } =
    useDataPagination(serverItems);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          goToNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, goToNextPage, hasNextPage]
  );

  return (
    <div className="items flex flex-col gap-4">
      <UiList items={items} />
      {hasNextPage && (
        <div
          ref={lastItemRef}
          className="flex flex-col items-center m-10 gap-4 text-gray-400"
        >
          <svg
            className="animate-spin h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          LOADING
        </div>
      )}
    </div>
  );
}
