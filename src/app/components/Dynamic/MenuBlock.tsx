import React from "react";

interface MenuItem {
  id: number;
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    href: "/nieuws",
    label: "Algemeen",
  },
  {
    id: 2,
    href: "/nieuws/economie",
    label: "Economie",
  },
  {
    id: 3,
    href: "/nieuws/sport",
    label: "Sport",
  },
  {
    id: 4,
    href: "/nieuws/politiek",
    label: "Politiek",
  },
  {
    id: 5,
    href: "/lifestyle",
    label: "Lifestyle",
  },
  {
    id: 6,
    href: "/nieuws/uitzendingen",
    label: "Uitzendingen",
  },
  {
    id: 7,
    href: "/nieuws/panel",
    label: "RTL Nieuwspanel",
  },
];

export default function MenuBlock() {
  return (
    <nav
      className="flex flex-row border-b border-gray-300 overflow-x-auto overflow-y-hidden max-w-full whitespace-nowrap scrollbar-hide"
      role="tablist"
    >
      {menuItems.map((item) => (
        <a
          key={item.id}
          className={`px-4 py-2 no-underline transition-colors duration-300 ${
            item.id === 3 ? "font-bold text-blue-500" : "text-black"
          }`}
          tabIndex={item.id}
          role="tab"
          href={item.href}
        >
          <span className="flex items-center">
            <span className="mr-1 text-sm">{item.label}</span>
            {item.id === 3 && (
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            )}
          </span>
        </a>
      ))}
    </nav>
  );
}
