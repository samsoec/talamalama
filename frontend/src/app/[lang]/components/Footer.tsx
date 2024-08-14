"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface FooterLinkGroup {
  title: string;
  links: Array<FooterLink>;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`transition ease-in-out delay-50 hover:text-gray-400 ${
          path === url && "text-gray-400 border-gray-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Footer({
  logoUrl,
  tagLine,
  pageLinks,
  serviceLinks,
  socialLinks,
  copyright: {
    title: copyrightTitle,
    links: copyrightLinks,
  },
  disclaimer: {
    title: disclaimerTitle,
    text: disclaimerText,
  },
}: {
  socialLinks: FooterLinkGroup;
  pageLinks: FooterLinkGroup;
  serviceLinks: FooterLinkGroup;
  logoUrl: string | null;
  tagLine: string;
  copyright: FooterLinkGroup;
  disclaimer: {
    title: string;
    text: string;
  };
}) {

  return (
    <footer>
      <div className="py-8 px-4 lg:px-0 bg-primary text-gray-100">
        <div className="container mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 gap-2 col-span-full md:pb-0 md:col-span-3">
              <Logo src={logoUrl}/>
              <span className="pb-1 text-lg">{tagLine}</span>
            </div>

            <div className="pb-6 col-span-full md:text-left md:col-span-2 gap-2">
              <p className="pb-1 text-lg font-medium">{serviceLinks.title}</p>
              <ul className="gap-1">
                {serviceLinks.links.map((link: FooterLink) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </ul>
            </div>

            <div className="pb-6 col-span-full md:text-left md:col-span-2 gap-2">
              <p className="pb-1 text-lg font-medium">{pageLinks.title}</p>
              <ul className="gap-1">
                {pageLinks.links.map((link: FooterLink) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </ul>
            </div>

            <div className="pb-6 col-span-full md:text-left md:col-span-2 gap-2">
              <p className="pb-1 text-lg font-medium">{socialLinks.title}</p>
              <ul className="gap-1">
                {socialLinks.links.map((link: FooterLink) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </ul>
            </div>

            <div className="pb-6 col-span-full md:text-left md:col-span-3 gap-2">
              <p className="pb-1 text-lg font-medium">{disclaimerTitle}</p>
              <p className="pb-1 text-sm">{disclaimerText}</p>
            </div>

          </div>
        </div>
      </div> 
      {/* Copyright */}
      <div className="flex bg-accent">
        <div className="container flex py-2 gap-2 mx-auto justify-between text-gray-100 flex-col lg:flex-row text-center">
          <span>
            {copyrightTitle}
          </span>
          <ul className="flex gap-2 flex-col lg:flex-row">
            {copyrightLinks.map((link: FooterLink) => (
              <li className="mr-2">
                <Link
                  href={link.url}
                  className="text-gray-100"
                  key={link.id}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
