import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsAdvantageItem extends Schema.Component {
  collectionName: 'components_elements_advantage_items';
  info: {
    displayName: 'Advantage Item';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ElementsBenefitItem extends Schema.Component {
  collectionName: 'components_elements_benefit_items';
  info: {
    displayName: 'Benefit Item';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsDisclaimer extends Schema.Component {
  collectionName: 'components_elements_disclaimers';
  info: {
    displayName: 'Disclaimer';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    title: Attribute.String;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsHeroHighlight extends Schema.Component {
  collectionName: 'components_elements_hero_highlights';
  info: {
    displayName: 'Hero Highlight';
  };
  attributes: {
    caption: Attribute.String;
    value: Attribute.String;
    avatars: Attribute.Media;
  };
}

export interface ElementsMarqueeItem extends Schema.Component {
  collectionName: 'components_elements_marquee_items';
  info: {
    displayName: 'Marquee Item';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
    authorTitle: Attribute.String;
    rating: Attribute.Decimal;
  };
}

export interface ElementsWorkflowItem extends Schema.Component {
  collectionName: 'components_elements_workflow_items';
  info: {
    displayName: 'Workflow Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    cover: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    companyProfile: Attribute.Component<'layout.logo'>;
    socialLinks: Attribute.Component<'links.social-link', true>;
    disclaimer: Attribute.Component<'elements.disclaimer'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
    caption: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsBenefit extends Schema.Component {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefit';
    description: '';
  };
  attributes: {
    prefix: Attribute.String;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'elements.benefit-item', true> &
      Attribute.Required;
  };
}

export interface SectionsDivider extends Schema.Component {
  collectionName: 'components_sections_dividers';
  info: {
    displayName: 'Divider';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    backgroundImages: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'links.button-link', true>;
    highlights: Attribute.Component<'elements.hero-highlight', true>;
  };
}

export interface SectionsMarquee extends Schema.Component {
  collectionName: 'components_sections_marquees';
  info: {
    displayName: 'Marquee';
    description: '';
  };
  attributes: {
    separator: Attribute.Media & Attribute.Required;
    items: Attribute.Component<'elements.marquee-item', true> &
      Attribute.Required;
  };
}

export interface SectionsOurAdvantage extends Schema.Component {
  collectionName: 'components_sections_our_advantages';
  info: {
    displayName: 'Our Advantage';
    description: '';
  };
  attributes: {
    prefix: Attribute.String;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'elements.advantage-item', true> &
      Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsPortofolio extends Schema.Component {
  collectionName: 'components_sections_portofolios';
  info: {
    displayName: 'Portofolio';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    industries: Attribute.Relation<
      'sections.portofolio',
      'oneToMany',
      'api::industry.industry'
    >;
    serviceFeatures: Attribute.Relation<
      'sections.portofolio',
      'oneToMany',
      'api::service-feature.service-feature'
    >;
  };
}

export interface SectionsReachUs extends Schema.Component {
  collectionName: 'components_sections_reach_uses';
  info: {
    displayName: 'Reach Us';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    url: Attribute.String;
    newTab: Attribute.Boolean;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsServiceGroup extends Schema.Component {
  collectionName: 'components_sections_service_groups';
  info: {
    displayName: 'Service Group';
  };
  attributes: {
    heading: Attribute.String;
    categories: Attribute.Relation<
      'sections.service-group',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface SectionsShowcase extends Schema.Component {
  collectionName: 'components_sections_showcases';
  info: {
    displayName: 'Showcase';
    description: '';
  };
  attributes: {
    prefix: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    portofolios: Attribute.Relation<
      'sections.showcase',
      'oneToMany',
      'api::portofolio.portofolio'
    >;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    testimonials: Attribute.Component<'elements.testimonial', true> &
      Attribute.Required;
    prefix: Attribute.String;
  };
}

export interface SectionsWorkflow extends Schema.Component {
  collectionName: 'components_sections_workflows';
  info: {
    displayName: 'Workflow';
  };
  attributes: {
    prefix: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    items: Attribute.Component<'elements.workflow-item', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.advantage-item': ElementsAdvantageItem;
      'elements.benefit-item': ElementsBenefitItem;
      'elements.disclaimer': ElementsDisclaimer;
      'elements.footer-section': ElementsFooterSection;
      'elements.hero-highlight': ElementsHeroHighlight;
      'elements.marquee-item': ElementsMarqueeItem;
      'elements.testimonial': ElementsTestimonial;
      'elements.workflow-item': ElementsWorkflowItem;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.benefit': SectionsBenefit;
      'sections.divider': SectionsDivider;
      'sections.hero': SectionsHero;
      'sections.marquee': SectionsMarquee;
      'sections.our-advantage': SectionsOurAdvantage;
      'sections.portofolio': SectionsPortofolio;
      'sections.reach-us': SectionsReachUs;
      'sections.service-group': SectionsServiceGroup;
      'sections.showcase': SectionsShowcase;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.workflow': SectionsWorkflow;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
