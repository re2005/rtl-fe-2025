import type { Item } from "../../lib/useData";
import Image from "next/image";
import Link from "next/link";

export default function UiList({ items }: { items: Item[] }) {
  return (
    <ul
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-10"
      data-testid="ui-list"
    >
      {items.map((item) => (
        <li key={item.id} data-testid={item.id}>
          <div className="relative group">
            <Link href={item.url} className="flex flex-col gap-2">
              <div className="relative w-full h-32 md:h-60 overflow-hidden bg-rtl-blue">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="absolute inset-0 object-cover transition-transform duration-200 group-hover:translate-y-2 group-hover:scale-105"
                  priority={true}
                />
              </div>

              <p className="absolute top-1 left-0 right-0 group-hover:opacity-100 z-1 bg-white bg-opacity-80 p-5 text-sm transition-all opacity-0 font-bold">
                {item.description && item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>

              <div className="absolute top-0 right-0 bg-rtl-blue bg-opacity-75 py-0.5 px-1.5 text-xs uppercase font-semibold text-white z-2">
                {item.label}
              </div>

              <h3 className="font-semibold text-base md:text-lg">
                {item.title}
              </h3>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
