import Link from "next/link";
import Image from "next/image";
import { ArrayData, Category, Data, Picture, Portofolio, Service } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";
import { useState } from "react";
import PortofolioCard from "../views/portofolio-card";
import BenefitCard from "../views/benefit-card";


interface PortofolioShowcaseProps {
  id: string;
  __component: string;
  prefix: string;
  title: string;
  description: string;
  picture: Picture;
  portofolios: ArrayData<Portofolio>;
}

export default function PortofolioShowcase({ data: {
  prefix,
  title,
  description,
  portofolios,
  picture,
}}: { data: PortofolioShowcaseProps }) {
  // separate portofolios into two arrays with same size
  const [portofolio, otherPortofolio] = portofolios.data.reduce((acc, item, index) => {
    acc[index % 2].push(item);
    return acc;
  }, [[], []] as Data<Portofolio>[][]);
  
  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto divide-y divide-gray-400 divide-opacity-50">

        {/* Portofolio Grid For Desktop */}
        <div className="w-full flex-wrap gap-4 hidden lg:flex">
          <div className="flex flex-col flex-[25%] max-w-[50%] gap-4">
            <div className="row-span-1">
              <span className="text-accent text-sm md:text-md text-center md:text-left">{prefix}</span>
              <p className="py-2 text-4xl">{title}</p>
              <p className="py-2 text-md text-gray-400">{description}</p>
            </div>
            {portofolio.map((item) => (
              <PortofolioCard
                key={item.id}
                slug={item.attributes.slug}
                title={item.attributes.title}
                subtitle={item.attributes.services.data.map((service) => service.attributes.name).join(" / ")}
                cover={item.attributes.cover}
              />
            ))}
          </div>

          <div className="flex flex-col flex-[25%] max-w-[50%] gap-4">
            {otherPortofolio.map((item) => (
              <PortofolioCard
                key={item.id}
                slug={item.attributes.slug}
                title={item.attributes.title}
                subtitle={item.attributes.services.data.map((service) => service.attributes.name).join(" / ")}
                cover={item.attributes.cover}
              />
            ))}
          </div>
        </div>

        {/* Portofolio Grid For Mobile */}
        <div className="flex flex-col gap-4 lg:hidden">
          {portofolios.data.map((item) => (
            <PortofolioCard
              key={item.id}
              slug={item.attributes.slug}
              title={item.attributes.title}
              subtitle={item.attributes.services.data.map((service) => service.attributes.name).join(" / ")}
              cover={item.attributes.cover}
            />
          ))}
        </div>

      </div>
    </div> 
  );
}