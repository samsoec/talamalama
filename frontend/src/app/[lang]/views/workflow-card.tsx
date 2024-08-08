import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Picture } from "../utils/model";

interface WorkflowProps {
  title: string;
  cover: Picture;
}

export default function WorkflowCard({
  title,
  cover
}: WorkflowProps) {
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
      <span className="text-gray-100 text-lg p-4">{title}</span>
      <div className="relative w-full aspect-video">
        {renderImage(cover)}
      </div>
    </div>
  )
}