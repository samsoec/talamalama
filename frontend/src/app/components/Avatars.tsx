import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

export type Avatar = {
  id: string;
  attributes: {
    url: string;
    name: string;
    alternativeText: string;
  };
};

export function Avatars ({ data }: { data: Avatar[] }) {
  const getUrl = (url: string) => getStrapiMedia(url);
  return (
    <div className="flex justify-start">
      {data.map((avatar, index) => (
        <div key={index} className={`p-2 bg-white rounded-full ${index > 0 ? '-ml-6' : 'ml-0'} border border-gray-700`}>
          <Image
            src={getUrl(avatar.attributes.url) || ''} 
            alt={`avatar-${index}`}
            height={24}
            width={24}
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      ))}
    </div>
  );
}