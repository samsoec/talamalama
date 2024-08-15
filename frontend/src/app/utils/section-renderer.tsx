import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import ReachUs from "../components/ReachUs";
import ServiceGroup from "../components/ServiceGroup";
import Portofolio from "../components/Portofolio";
import { Marquee } from "../components/Marquee";
import Benefit from "../components/Benefit";
import Advantage from "../components/Advantage";
import PortofolioShowcase from "../components/PortofolioShowcase";
import Workflow from "../components/Workflow";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.divider":
      return <div className="bg-primary"><div key={index} className="container border-b-2 border-b-gray-700 mx-auto" /></div>;
    case "sections.reach-us":
      return <ReachUs key={index} data={section} />;
    case "sections.service-group":
      return <ServiceGroup key={index} data={section} />;
    case "sections.portofolio":
      return <Portofolio key={index} data={section} />;
    case "sections.marquee":
      return <Marquee key={index} data={section} />;
    case "sections.benefit":
      return <Benefit key={index} data={section} />;
    case "sections.our-advantage":
      return <Advantage key={index} data={section} />;
    case "sections.showcase":
      return <PortofolioShowcase key={index} data={section} />;
    case "sections.workflow":
      return <Workflow key={index} data={section} />;
    default:
      return null;
  }
}
