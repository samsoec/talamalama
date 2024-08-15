"use client"

import TestimonialCard, { TestimonialProps } from "../views/testimonial-card";
import Slideshow from "./Slideshow";

interface TestimonialsProps {
  data: {
    id: string;
    prefix: string;
    title: string;
    description: string;
    testimonials: TestimonialProps[];
  };
}

export default function Testimonials({ data: { prefix, title, description, testimonials } }: TestimonialsProps) {
  const splitArrayIntoChunks = (array: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return (
    <section className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto lg:max-w-[1000px] md:max-w-md sm:max-w-sm max-w-xs">

        <div className="flex flex-col justify-center pb-12">
          <span className="text-accent text-center text-sm md:text-md">{prefix}</span>
          <p className="py-2 text-4xl text-center">{title}</p>
          <p className="py-2 text-md text-center text-gray-400">{description}</p>
        </div>

        {/* Testimonial Grid For Desktop */}
        <div className="hidden lg:flex">
          <Slideshow<TestimonialProps[]>
            withArrows={false}
            data={splitArrayIntoChunks(testimonials, 4)}
            renderItem={(items) => (
              <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
                {items.map((item) => (
                  <TestimonialCard {...item}/>
                ))}
              </div>
            )}
          />
        </div>

        {/* Testimonial Grid For Mobile */}
        <div className="lg:hidden">
          <Slideshow<TestimonialProps>
            withArrows={false}
            data={testimonials}
            renderItem={(item) => (
              <TestimonialCard {...item}/>
            )}
          />
        </div>

      </div>
    </section> 
  );
}
