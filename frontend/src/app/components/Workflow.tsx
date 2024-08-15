"use client"

import { Picture } from "../utils/model";
import WorkflowCard from "../views/workflow-card";
import Slideshow from "./Slideshow";

interface Workflow {
  id: string;
  title: string;
  cover: Picture;
}

interface WorkflowProps {
  id: string;
  __component: string;
  prefix: string;
  title: string;
  description: string;
  items: Array<Workflow>;
}

export default function Workflow({ data: {
  prefix,
  title,
  description,
  items,
}}: { data: WorkflowProps }) {
  return (
    <div className="bg-primary text-gray-100">

      {/* Desktop works sticky */}
      <div className="py-8 px-4 lg:px-0 hidden lg:flex flex-row">
        <div className="container mx-auto flex flex-row">

          <div className="flex-1">
            <div className="sticky top-16">
              <span className="text-accent text-sm md:text-md text-center md:text-left">{prefix}</span>
              <p className="py-2 text-4xl">{title}</p>
              <p className="py-2 text-md text-gray-400">{description}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-8">
            {items.map((item, index) => (
              <div key={`workflow-${index}`} className="flex items-center gap-8">
                <div className="relative flex items-center h-full">
                  <div className="flex z-[1] w-12 h-12 items-center justify-center bg-accent rounded-full">
                    <span className="text-2xl text-gray-100">{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center w-full">
                    <div className={`flex-1 w-2 ${index > 0 ? 'bg-gradient-to-b from-primary to-accent' : 'bg-primary'}`}/>
                    <div className={`flex-1 w-2 ${index < items.length - 1 ? 'bg-gradient-to-b from-accent to-primary' : 'bg-primary'}`}/>
                  </div>
                </div>
                <div className="flex-1">
                  <WorkflowCard
                    key={item.id}
                    title={item.title}
                    cover={item.cover}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div> 

      {/* Desktop snap */}
      {/* <div className="hidden lg:flex snap-start">
        <div className="py-8 px-12 h-svh w-full overflow-scroll no-scrollbar snap-y snap-mandatory flex flex-col items-end gap-16">

          <div className="w-[45%] sticky top-16 self-start">
            <span className="text-accent text-sm md:text-md text-center md:text-left">{prefix}</span>
            <p className="py-2 text-4xl">{title}</p>
            <p className="py-2 text-md text-gray-400">{description}</p>
          </div>

          {items.map((item, index) => (
            <div key={`workflow-${index}`} className="flex items-center gap-8 w-[50%] snap-start">
              <div className="flex w-12 h-12 items-center justify-center bg-accent rounded-full">
                <span className="text-2xl text-gray-100">{index + 1}</span>
              </div>
              <WorkflowCard
                key={item.id}
                title={item.title}
                cover={item.cover}
              />
            </div>
          ))}

        </div>
      </div> */}

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="py-8 px-4 lg:px-0 ">
          <div className="container mx-auto">
            <span className="text-accent text-sm md:text-md text-center md:text-left">{prefix}</span>
            <p className="py-2 text-4xl">{title}</p>
            <p className="py-2 text-md text-gray-400">{description}</p>
          </div>
        </div>

        <div className="mt-8">
          <Slideshow<Workflow>
            withArrows={false}
            withIndicator={false}
            data={items}
            renderItem={(item, index) => (
              <div key={`workflow-${index}`} className="flex flex-col items-center gap-8">
                <div className="px-4 w-full">
                  <WorkflowCard
                    key={item.id}
                    title={item.title}
                    cover={item.cover}
                  />
                </div>
                <div className="relative flex justify-center w-full">
                  <div className="flex z-[1] w-12 h-12 items-center justify-center bg-accent rounded-full">
                    <span className="text-2xl text-gray-100">{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 flex flex-row items-center w-full">
                    <div className={`flex-1 h-2 ${index > 0 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-primary'}`}/>
                    <div className={`flex-1 h-2 ${index < items.length - 1 ? 'bg-gradient-to-r from-accent to-primary' : 'bg-primary'}`}/>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

    </div>
  );
}