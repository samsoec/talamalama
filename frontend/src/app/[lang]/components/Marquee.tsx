import Image from "next/image";
import MarqueeComponent from "react-fast-marquee";
import { Picture } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";

type Props = {
  data: {
    items: {
      id: string;
      text: string;
    }[],
    separator: Picture,
  },
};

export function Marquee ({ data: { items, separator } }: Props) {
  const separatorUrl = getStrapiMedia(separator.data.attributes.url);

  return (
    <MarqueeComponent autoFill loop={0} className="flex items-center justify-center py-4 bg-primary">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mr-2">
          <span className="text-2xl text-gray-100">{item.text}</span>
          <Image src={separatorUrl || ''} alt="marquee-separator" height={24} width={24} />
        </div>
      ))}
    </MarqueeComponent>
  )
};