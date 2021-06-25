/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    "src": "/",
    "public": "/"
  },
  exclude: [
    "**/node_modules/**/*",
  ],
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: false,
    minify: false,
    target: "esnext"
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    jsxFactory: "h",
    jsxFragment: "createFragment"
  },
  env: {

  }
};
