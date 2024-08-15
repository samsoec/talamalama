import { Picture } from "../utils/model";

import BenefitCard from "../views/benefit-card";

interface Benefit {
  id: string;
  title: string;
  description: string;
  image: Picture;
}

interface BenefitProps {
  id: string;
  __component: string;
  prefix: string;
  title: string;
  items: Array<Benefit>;
}

export default function Benefit({ data: {
  prefix,
  title,
  items,
}}: { data: BenefitProps }) {
  return (
    <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
      <div className="container mx-auto divide-y divide-gray-400 divide-opacity-50">

        <div className="flex flex-col justify-center">
          <span className="text-accent text-center text-sm md:text-md">{prefix}</span>
          <p className="py-2 text-4xl text-center">{title}</p>
          <div className="flex flex-col md:flex-row py-8 gap-4">
            {items.map((item) => (
              <BenefitCard
                key={item.id}
                title={item.title}
                subtitle={item.description}
                cover={item.image}
              />
            ))}
          </div>
        </div>

      </div>
    </div> 
  );
}