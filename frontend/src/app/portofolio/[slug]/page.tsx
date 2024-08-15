import { fetchAPI } from '@/app/utils/fetch-api';
import Post from '@/app/views/post';
import type { Metadata } from 'next';
import { getPageBySlug } from '../../utils/get-page-by-slug';
import { sectionRenderer } from '../../utils/section-renderer';

async function getPostBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/portofolios`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      cover: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      services: {
        fields: ["name", "slug"],
      },
      blocks: { 
        populate: {
          '__component': '*', 
          'files': '*',
          'file': '*',
          'url': '*',
          'body': '*',
          'title': '*',
          'author': '*',
        }
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

async function getMetaData(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/portofolios`;
  const urlParamsObject = {
    filters: { slug },
    populate: { seo: { populate: '*' } },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = await getMetaData(params.slug);
  const metadata = meta[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}

export default async function PortofolioRoute({ params }: { params: { slug: string, lang: string } }) {
  const { slug, lang } = params;
  const data = await getPostBySlug(slug);
  const page = await getPageBySlug('portofolio-post', lang);
  if (data.data.length === 0) return <h2>no post found</h2>;
  const contentSections = page.data[0].attributes.contentSections;

  return (
    <>
      <Post data={data.data[0]} />
      {contentSections.map((section: any, index: number) =>
        sectionRenderer(section, index)
      )}
    </>
  );
}

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/portofolios`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(
    path,
    {},
    options
  );

  return response.data.map(
    (portofolio: {
      attributes: {
        slug: string;
      };
    }) => ({ slug: portofolio.attributes.slug })
  );
}
