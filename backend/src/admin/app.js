import favicon from '../../favicon.png';

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: favicon,
  },
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: favicon,
  },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: "#fff0ea",
        primary200: "#fee1d5",
        primary500: "#FA682C",
        primary600: "#e15e28",
        primary700: "#c85323",
        buttonPrimary500: "#FA682C",
        buttonPrimary600: "#e15e28",
      },
    },

    // overwrite dark theme properties
    dark: {
      colors: {
        primary100: "#fff0ea",
        primary200: "#fee1d5",
        primary500: "#FA682C",
        primary600: "#e15e28",
        primary700: "#c85323",
        buttonPrimary500: "#FA682C",
        buttonPrimary600: "#e15e28",
      },
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  // Custom string translations
  translations: {
    en: {
      "Auth.form.welcome.title": "Talamalama Dashboard",
      "Auth.form.welcome.subtitle": "Log in to your Talamalama account",
      "Auth.form.register.subtitle": "Credentials are only used to authenticate in Talamalama Dashboard. All saved data will be stored in your database.",
      "app.components.LeftMenu.navbrand.title": "Talamalama Dashboard",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
