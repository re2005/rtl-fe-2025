import type { Item } from "@/app/lib/useData";
import Image from "next/image";
import Link from "next/link";

interface UiListCardProps {
  item?: Item;
}

export default function UiArticlesItem({ item }: UiListCardProps) {
  return (
    item && (
      <Link
        href={item.url}
        className="relative flex w-full h-full"
        data-testid={item.id}
      >
        <picture className="h-44 sm:h-64">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            sizes="100vw 50vw 25vw"
            priority={true}
          />
        </picture>
        <div className="lg:absolute">{item.label}</div>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-85 flex items-center px-2 py-2 md:py-6">
          <h3 className="font-semibold text-sm md:text-xl text-balance text-white">
            {item.title}
          </h3>
        </div>
      </Link>
    )
  );
}
