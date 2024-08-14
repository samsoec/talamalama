import Image from "next/image";
import { Picture } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";


interface AdvantageProps {
  id: string;
  __component: string;
  prefix: string;
  title: string;
  picture: Picture;
  items: Array<{
    id: string;
    text: string;
  }>;
}

export default function Advantage({ data: {
  prefix,
  title,
  items,
  picture,
}}: { data: AdvantageProps }) {

  const pictureUrl = getStrapiMedia(
    picture.data.attributes.url
  );

  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto divide-y divide-gray-400 divide-opacity-50">

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {pictureUrl && (
            <div className="relative w-full aspect-square flex-1">
              <Image
                src={pictureUrl}
                alt={picture.data.attributes.alternativeText} 
                fill={true}
                objectFit='contain'
                objectPosition='top'
                className='rounded-lg'
              />
            </div>
          )}
          <div className="flex flex-col flex-1">
            <span className="text-accent text-sm md:text-md text-center md:text-left">{prefix}</span>
            <p className="py-2 text-4xl text-center md:text-left">{title}</p>
            <ol className="flex flex-col py-4 gap-4" type="1">
              {items.map((item) => (
                <li key={item.id} className="list-inside list-decimal text-lg text-gray-400">
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
          
        </div>

      </div>
    </div> 
  );
}