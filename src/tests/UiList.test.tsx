import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import UiList from "../app/components/UiList";
import { useData } from "../app/lib/useData";

describe("List Component", () => {
  it("List should render a list of items", () => {
    const { items } = useData();
    render(<UiList items={items} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(items.length);
  });

  it("List should render correctly when there is 1 item", () => {
    const items = [
      {
        id: 1,
        title: "test",
        label: "test",
        url: "https://www.rtl.nl/nieuws/sport/artikel/5489911/liveblog-dakar-rally-2025-etappe-12",
        image:
          "https://redactie.rtl.nl/sites/default/files/content/images/2025/01/17/ANP-517600010.jpg",
      },
    ];

    render(<UiList items={items} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(1);
  });
});
