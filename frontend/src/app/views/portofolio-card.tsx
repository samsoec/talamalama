import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import Link from "next/link";

interface PortofolioProps {
  slug: string;
  title: string;
  subtitle: string;
  cover: Picture;
}

export default function PortofolioCard({
  slug,
  title,
  subtitle,
  cover
}: PortofolioProps) {
  const renderImage = (picture: Picture) => {
    const iconUrl = getStrapiMedia(
      picture.data.attributes.url
    );

    if (iconUrl) {
      return (
        <Image
          src={iconUrl} 
          alt={picture.data.attributes.alternativeText} 
          fill={true}
          objectFit='cover'
          objectPosition='center'
          className='rounded-lg'
        />
      );
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">  
      <div className="relative w-full aspect-square">
        {renderImage(cover)}
        {/* Overlay cover when hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition ease-in-out delay-50">
          <Link href={`/portofolio/${slug}`}>
            <div className="p-4 bg-white aspect-square rounded-full flex justify-center items-center">
              <span className="text-gray-800 text-center text-lg font-medium">Lihat Detail</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-row border border-gray-600 bg-zinc-800 rounded-lg p-2 w-full">
        <div className="text-gray-400 text-sm">
          <span>{subtitle}</span>
        </div>
        <span className="text-gray-100">{title}</span>
      </div>
    </div>
  );
}