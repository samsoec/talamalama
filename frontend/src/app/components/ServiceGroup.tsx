"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrayData, Category, Picture, Service } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";
import { useState } from "react";

interface ServiceGroupProps {
  id: string;
  __component: string;
  heading: string;
  categories: ArrayData<Category>;
}

export default function ServiceGroup({ data: {
  heading,
  categories,
}}: { data: ServiceGroupProps }) {

  const [selectedCategory, setSelectedCategory] = useState<Category>(categories.data[0].attributes);

  const isCategorySelected = (slug: string) => {
    return slug === selectedCategory.slug;
  }  

  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto lg:max-w-[1000px] md:max-w-md sm:max-w-sm max-w-xs">

        <p className="py-8 text-4xl md:text-6xl text-center font-semibold max-w-7xl">{heading}</p>
        <div className="flex flex-col py-8 gap-4">
          <ul className="flex sm:justify-center text-sm font-medium text-center text-gray-100 overflow-auto">
            {categories.data.map((category) => (
              <li onClick={() => setSelectedCategory(category.attributes)} className={`me-2 rounded-full border cursor-pointer transition ease-in-out delay-50 ${isCategorySelected(category.attributes.slug) ? "bg-white text-gray-700" : "text-white border-gray-700 hover:border-gray-500 border-solid"}`} id={category.attributes.slug}>
                <span className="inline-block px-4 py-3 rounded-lg">{category.attributes.name}</span>
              </li>
            ))}
          </ul>
          {selectedCategory && (
            <CategoryView category={selectedCategory}/>
          )}
        </div>

      </div>
    </div> 
  );
}

function CategoryView({ category }: { category: Category }) {
  const [selectedService, setSelectedService] = useState<Service>(category.serviceFeatures.data[0].attributes);

  const isSelectedService = (slug: string) => {
    return slug === selectedService.slug;
  }

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
    <div className="flex flex-col items-center gap-12">
      <p className="text-center text-gray-100 max-w-xl">{category.description}</p>
      <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-7xl">
        <ul className="flex flex-1 flex-col gap-4">
          {category.serviceFeatures.data.map((service) => (
            <li 
              key={service.id} 
              onMouseEnter={() => setSelectedService(service.attributes)} 
              onClick={() => setSelectedService(service.attributes)} 
              className={`flex flex-col py-8 border-b-2 border-b-gray-600 cursor-pointer transition ease-in-out delay-150 hover:translate-x-2 ${isSelectedService(service.attributes.slug) && 'pl-2'}`}>
              <p className="text-2xl font-semibold text-gray-100">{service.attributes.name}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 flex-col gap-2">
          <div className="relative w-full aspect-square">
            {renderImage(selectedService.picture)}
          </div>
          <div className="border border-gray-600 bg-zinc-800 rounded-lg p-2 max-w-fit">
            <p className="text-gray-100">{selectedService.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}