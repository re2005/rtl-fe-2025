import type { Item } from "../../lib/useData";
import Image from "next/image";
import Link from "next/link";

interface UiListCardProps {
  item: Item;
}

export default function UiArticlesItem({ item }: UiListCardProps) {
  return (
    <li key={item.id} data-testid={item.id}>
      <div className="flex flex-row gap-2">
        <Link href={item.url} className="flex flex-row gap-2">
          <picture className="relative w-2/3 h-16 overflow-hidden bg-rtl-blue">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="absolute object-cover transition-transform duration-200 group-hover:translate-y-2"
              priority={true}
            />
          </picture>

          <div>
            <h3 className="font-semibold text-sm text-balance">{item.title}</h3>
            <div className="text-xs uppercase font-semibold opacity-50">
              {item.label}
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
