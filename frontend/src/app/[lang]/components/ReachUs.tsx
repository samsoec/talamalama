import Link from "next/link";
import Image from "next/image";
import { Picture } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";

interface ReachUsProps {
  id: string;
  __component: string;
  heading: string;
  url: string;
  newTab: boolean;
  icon: Picture;
}

export default function ReachUs({ data: {
  heading,
  url,
  newTab,
  icon,
}}: { data: ReachUsProps }) {

  const iconUrl = getStrapiMedia(
    icon.data?.attributes.url
  );

  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">

        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <p className="text-4xl md:text-6xl text-center md:text-left font-semibold max-w-lg">{heading}</p>
          <div className="relative h-[160px] w-[160px] transition ease-in-out delay-150 hover:scale-110">
            <Link href={url} target={newTab ? '_blank' : '_self'}>
              {iconUrl && <Image src={iconUrl} alt="reach-us" layout="fill" />}
            </Link>
          </div>
        </div>

      </div>
    </div> 
  );
}
