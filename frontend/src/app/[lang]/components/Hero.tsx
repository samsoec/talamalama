"use client"

import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { renderButtonStyle } from "../utils/render-button-style";
import { Avatar, Avatars } from "./Avatars";
import { Zoom } from "react-slideshow-image";
import { ArrayData, Attribute, Data } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

type Picture = Data<Attribute>;

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Highlight {
  id: string;
  caption: string;
  value: string;
  avatars: {
    data?: Avatar[];
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    buttons: Button[];
    highlights: Highlight[];
    backgroundImages: {
      data: Picture[];
    };
  };
}

export default function Hero({ data }: HeroProps) {
  const getImageUrl = (picture: Picture) => getStrapiMedia(picture.attributes.url);

  return (
    <section className="bg-transparent text-gray-100 h-svh flex items-end">
      <div className="container flex flex-col justify-center mx-auto mb-16 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        
        {/* Darken image background */}
        <div className="absolute -z-10 inset-0 bg-black bg-opacity-70"></div>
        
        {/* Background image */}
        <div className="absolute -z-20 inset-0 w-full h-full">
          <Zoom scale={0.4} indicators={false} arrows={false} autoplay={true} duration={5000}>
            {data.backgroundImages.data.map((image: Picture, index: number) => (
              <div className="h-svh w-svw">
                <Image
                  src={getImageUrl(image) || ''} 
                  alt={`image-background-${index}`} 
                  fill={true}
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
            ))}
          </Zoom>
        </div>

        <div className="flex flex-col justify-center p-6 rounded-lg lg:text-left gap-8 ">
          <div className="flex flex-col gap-4">
            <HighlightedText
              text={data.title}
              tag="h1"
              className="text-4xl leading-none sm:text-6xl xl:max-w-3xl"
              color="dark:text-violet-400"
            />
            <HighlightedText
              text={data.description}
              tag="p"
              className="tmt-6 text-md sm:mb-12 xl:max-w-xl"
              color="dark:text-violet-400"
            />
          </div>
          <div className="flex flex-row gap-2">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-4 items-end">
            {data.highlights.map((item) => (
              <div className="flex flex-col gap-2">
                {item.avatars.data ? <Avatars data={item.avatars.data}/> : <span className="text-4xl">{item.value}</span>}
                <span className="text-sm">{item.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
