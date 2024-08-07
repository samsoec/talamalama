import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { postRenderer } from "@/app/[lang]/utils/post-renderer";
import Image from "next/image";
import { ArrayData, Service } from "../utils/model";

interface Portofolio {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    year: string;
    clientName: string;
    services: ArrayData<Service>;
    blocks: any[];
  };
}

export default function Post({ data }: { data: Portofolio }) {
  const { title, description, cover, year, clientName, services } =
    data.attributes;
  const imageUrl = getStrapiMedia(cover.data?.attributes.url);

  return (
    <article className="space-y-8 bg-primary text-gray-100">

      <div className="py-16 px-8 lg:px-24 space-y-6">
        <div className="container mx-auto flex flex-col gap-2">
          <h1 className="leading-tight text-5xl">{title}</h1>
          <span>{year} / {clientName}</span>
          <span>{services.data.map((service) => service.attributes.name).join(" / ")}</span>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="article cover image"
            fill={true}
            objectFit='cover'
            objectPosition='center'
          />
        )}
      </div>
      

      <div className="py-16 px-8 lg:px-24 space-y-6">
        <div className="container mx-auto flex flex-col gap-2">
          <p>{description}</p>

          {data.attributes.blocks.map((section: any, index: number) =>
            postRenderer(section, index)
          )}
        </div>
      </div>
    </article>
  );
}
