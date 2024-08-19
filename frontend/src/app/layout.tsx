import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {FALLBACK_SEO} from "@/app/utils/constants";


async function getGlobal(lang?: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata",
      "favicon",
      "navbar.links",
      "navbar.button",
      "navbar.navbarLogo.logoImg",
      "footer.socialLinks",
      "footer.companyProfile.logoImg",
      "footer.disclaimer",
      "serviceLinks",
      "serviceLinks.links",
      "pageLinks",
      "pageLinks.links",
      "copyright",
      "copyright.links",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata({ params } : { params: {lang: string}}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;
  
  const { navbar, footer, copyright, serviceLinks, pageLinks } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data?.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.companyProfile.logoImg.data?.attributes.url
  );

  return (
    <html lang={params.lang || 'id'}>
      <body>
        <Navbar
          button={navbar.button}
          links={navbar.links}
          logoUrl={navbarLogoUrl}
        />

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>

        <Footer
          logoUrl={footerLogoUrl}
          tagLine={footer.companyProfile.caption}
          serviceLinks={{
            title: serviceLinks.title,
            links: serviceLinks.links,
          }}
          pageLinks={{
            title: pageLinks.title,
            links: pageLinks.links,
          }}
          socialLinks={{
            title: "Social Media",
            links: footer.socialLinks,
          }}
          copyright={{
            title: copyright.title,
            links: copyright.links,
          }}
          disclaimer={{
            title: footer.disclaimer.title,
            text: footer.disclaimer.text,
          }}
        />
      </body>
    </html>
  );
}

// Deprecated
// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }
