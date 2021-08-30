module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.pgn" },

      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css",
      },
      {
        type: "text/javascript",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "nuxt-socket-io"],

  io: {
    // we could have multiple sockets that we identify with names
    // one of these sockets may have set "default" to true
    sockets: [
      {
        default: true, // make this the default socket
        name: "main", // give it a name that we can later use to choose this socket in the .vue file
        url:
          process.env.NODE_ENV === "production"
            ? "https://youtube-downloader-jabibi.herokuapp.com"
            : "http://localhost:3000",
      },
    ],
  },

  pwa: {
    manifest: {
      name: "Youtube Downloader by Jabibi",
      short_name: "Youtube Downloader",
      start_url: "/",
      theme_color: "#424242",
      display: "standalone",
    },
    icon: {
      iconSrc: "./static/logo.png",
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
