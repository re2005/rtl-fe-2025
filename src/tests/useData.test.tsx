import { describe, it, expect } from "vitest";
import { useData } from "../app/lib/useData";
import data from "../app/lib/assignment.json";

describe("useData hook", () => {
  it("returns the correct data structure", () => {
    const result = useData();

    // Assert that the result matches the expected data structure
    expect(result).toBeDefined();
    expect(result).toHaveProperty("data");
    expect(result).toHaveProperty("items");
    expect(Array.isArray(result.items)).toBe(true);

    // Validate some of the items
    if (result.items.length > 0) {
      const item = result.items[0];
      expect(item).toHaveProperty("id");
      expect(typeof item.id).toBe("number");

      expect(item).toHaveProperty("title");
      expect(typeof item.title).toBe("string");

      expect(item).toHaveProperty("label");
      expect(typeof item.label).toBe("string");

      expect(item).toHaveProperty("url");
      expect(typeof item.url).toBe("string");

      expect(item).toHaveProperty("image");
      expect(typeof item.image).toBe("string");
    }
  });

  it("matches the JSON data", () => {
    // Call the hook
    const result = useData();

    // Assert that the data matches the JSON import
    expect(result.data).toEqual(data);
  });
});
