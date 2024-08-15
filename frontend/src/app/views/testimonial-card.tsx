import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";
import { StarIcon } from "@heroicons/react/24/outline";


export interface TestimonialProps {
  id: string;
  text: string;
  authorName: string;
  authorTitle: string;
  rating: number;
  picture: Picture;
}

export default function TestimonialCard({
  authorName, authorTitle, text, rating, picture,
}: TestimonialProps) {
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
          objectFit='contain'
          objectPosition='center'
          className='rounded-lg'
        />
      );
    }
  }

  return (
    <div className="flex flex-col border border-gray-600 bg-zinc-800 rounded-lg w-full p-4">
      <div className="flex flex-row items-center justify-between w-full gap-4">
        <div className="relative w-[60px] h-[60px] aspect-square">
          {renderImage(picture)}
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-gray-100 text-lg">{authorName}</span>
          <span className="text-gray-400 text-sm">{authorTitle}</span>
        </div>
        <div className="flex flex-row gap-1 text-accent">
          <StarIcon height={24} width={24} />
          <span>{rating}</span>
        </div>
        
      </div>
      <div className="bg-primary my-4">
        <div className="container border-b-2 border-b-gray-700 mx-auto" />
      </div>
      <span className="text-gray-100">{text}</span>
    </div>
  )
}