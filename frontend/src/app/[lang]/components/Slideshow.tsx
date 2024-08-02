"use client";
import { Zoom, SlideshowRef } from "react-slideshow-image";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// import dynamic from 'next/dynamic';
// const ZoomDynamic = dynamic(() =>
//   import('react-slideshow-image').then((slideshow) => slideshow.Zoom),
//   { ssr: false }
// )

interface SlideshowProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}

export default function Slideshow<T>({ data, renderItem }: SlideshowProps<T>) {
  const [selected, setSelected] = useState(0);
  const slideRef = useRef<SlideshowRef>(null)
  return (
    <div className="slide-container w-full">
      <Zoom scale={0.7} ref={slideRef} infinite={false} arrows={false} onStartChange={(_, to) => setSelected(to)} autoplay={false} transitionDuration={150}>
        {data.map((item, index) => renderItem(item, index))}
      </Zoom>
      {/* Indicator and Arrows on bottom */}
      <div className="flex justify-center items-center gap-4 py-4">
        <button onClick={() => slideRef.current?.goBack()} className="bg-accent text-white p-2 rounded-full">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {data.map((_, index) => (
            <div key={index} className={`${index === selected ? 'w-4' : 'w-2'} h-2 bg-accent rounded-full`} />
          ))}
        </div>
        <button onClick={() => slideRef.current?.goNext()} className="bg-accent text-white p-2 rounded-full">
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
