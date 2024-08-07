"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      backgroundImages: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      separator: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        fields: ["url", "text", "newTab", "type"],
      },
      items: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          cover: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      highlights: {
        fields: ["caption", "value"],
        populate: {
          avatars: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        }
      },
      portofolios: {
        fields: ["title", "slug"],
        populate: {
          cover: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          services: {
            fields: ["name", "slug"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      icon: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      categories: {
        fields: ["name", "slug", "description"],
        populate: {
          serviceFeatures: {
            fields: ["name", "description", "slug"],
            populate: {
              picture: {
                fields: ["url", "alternativeText", "caption", "width", "height"],
              },
            },
          }
        },
      },
      industries: {
        fields: ["name", "slug", "description"],
      },
      serviceFeatures: {
        fields: ["name", "slug", "description"],
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
  portofolios: {
    fields: ["title", "slug"],
    populate: {
      cover: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      services: {
        fields: ["name", "slug"],
      },
      industry: {
        fields: ["name", "slug"],
      },
    },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate: ctx.query.populate ? ctx.query.populate : populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
