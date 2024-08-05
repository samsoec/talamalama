import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";

interface BenefitProps {
  title: string;
  subtitle: string;
  cover: Picture;
}

export default function BenefitCard({
  title,
  subtitle,
  cover
}: BenefitProps) {
  const renderImage = (picture: Picture) => {
    const iconUrl = getStrapiMedia(
      picture.data.attributes.url
    );

    if (iconUrl) {
      return (
        <Image
          src={iconUrl} 
          alt={picture.data.attributes.slug} 
          fill={true}
          objectFit='contain'
          objectPosition='center'
          className='rounded-lg'
        />
      );
    }
  }

  return (
    <div className="flex flex-col border border-gray-600 bg-zinc-800 rounded-lg w-full">
      <div className="relative w-full aspect-video">
        {renderImage(cover)}
      </div>
      <div className="p-4">
        <span className="text-gray-100 text-lg">{title}</span>
        <div className="text-gray-400 text-sm">
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  )
}