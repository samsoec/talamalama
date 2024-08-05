"use client";

import { ArrayData, Industry, Portofolio as Model, Service, Data } from "../utils/model";
import { useCallback, useEffect, useState } from "react";
import Filter from "./Filter";
import { fetchAPI } from "../utils/fetch-api";
import PortofolioCard from "../views/portofolio-card";
import Slideshow from "./Slideshow";


interface PortofolioProps {
  id: string;
  __component: string;
  heading: string;
  serviceFeatures: ArrayData<Service>;
  industries: ArrayData<Industry>;
}

type Filter = {
  service?: string;
  industry?: string;
}

export default function Portofolio({ data: {
  heading,
  serviceFeatures,
  industries,
}}: { data: PortofolioProps }) {
  const [filter, setFilter] = useState<Filter>({});
  const [portofolio, setPortofolio] = useState<Data<Model>[]>([]);
  const [isLoading, setLoading] = useState(true);
  const isEmpty = portofolio.length === 0;

  const fetchData = useCallback(async (filter: Filter) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/portofolios`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          services: { fields: ["name", "slug"] },
          industry: { fields: ["name", "slug"] },
        },
        filters: {
          services: filter.service ? { slug: filter.service } : undefined,
          industry: filter.industry ? { slug: filter.industry } : undefined,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      setPortofolio(responseData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const splitArrayIntoChunks = (array: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  useEffect(() => {
    fetchData(filter);
  }, [fetchData, filter]);

  const isShowAll = (filter: Filter) => 
    filter.service === undefined && filter.industry === undefined;

  const clearFilter = () => setFilter({});

  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto lg:max-w-[1000px] md:max-w-md sm:max-w-sm max-w-xs">

        <p className="py-8 text-4xl md:text-6xl text-center font-semibold max-w-7xl">{heading}</p>
        
        {/* Filters Here */}
        <ul className="flex w-full justify-center text-sm font-medium py-8 text-gray-100">
          <li onClick={clearFilter} id="show-all">
            <div className={`me-2 rounded-full border cursor-pointer transition ease-in-out delay-50 ${isShowAll(filter) ? "bg-white text-gray-700" : "text-white border-gray-700 hover:border-gray-500 border-solid"}`}>
              <span className="inline-block px-4 py-3 rounded-lg">Semua</span>
            </div>
          </li>
          <li>
            <Filter
              label={`Industri${filter.industry ? `: ${industries.data.find((industry) => industry.attributes.slug === filter.industry)?.attributes.name}` : ''}`}
              selected={filter.industry}
              options={industries.data.map((industry) => ({
                label: industry.attributes.name,
                value: industry.attributes.slug,
              }))}
              onSelect={(value) => setFilter({ ...filter, industry: value })}
            />
          </li>
          <li>
            <Filter
              label={`Service${filter.service ? `: ${serviceFeatures.data.find((service) => service.attributes.slug === filter.service)?.attributes.name}` : ''}`}
              selected={filter.service}
              options={serviceFeatures.data.map((service) => ({
                label: service.attributes.name,
                value: service.attributes.slug,
              }))}
              onSelect={(value) => setFilter({ ...filter, service: value })}
            />
          </li>
        </ul>

        {portofolio.length > 0 && (
          <>
            {/* Portofolio Grid For Desktop */}
            <div className="hidden lg:flex">
              <Slideshow<Data<Model>[]>
                data={splitArrayIntoChunks(portofolio, 6)}
                renderItem={(items) => (
                  <div className="w-full grid grid-cols-2 grid-rows-3 gap-4">
                    {items.map((item) => (
                      <PortofolioCard
                        key={item.id}
                        slug={item.attributes.slug}
                        title={item.attributes.title}
                        subtitle={item.attributes.services.data.map((service) => service.attributes.name).join(" / ")}
                        cover={item.attributes.cover}
                      />
                    ))}
                  </div>
                )}
              />
            </div>
          </>
        )}
        

        {portofolio.length > 0 && (
          <>
            {/* Portofolio Grid For Mobile */}
            <div className="lg:hidden">
              <Slideshow<Data<Model>>
                data={portofolio}
                renderItem={(item) => (
                  <PortofolioCard
                    key={item.id}
                    slug={item.attributes.slug}
                    title={item.attributes.title}
                    subtitle={item.attributes.services.data.map((service) => service.attributes.name).join(" / ")}
                    cover={item.attributes.cover}
                  />
                )}
              />
            </div>
          </>
        )}
        

      </div>
    </div> 
  );
}
