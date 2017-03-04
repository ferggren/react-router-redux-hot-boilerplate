React Hot Boilerplate
=====================

High customizable production-ready React environment with live-editing. Live editing (webpack-dev-server and react-hot-loader) are included only when running in dev-server mode.

### Installation

```
npm i
```

### Usage (dev-server)

```
npm run dev-server
open http://localhost:8081
edit src/components/app.js
```

All the changes will appear without reloading the browser. `build.js` automatically adds hot-module to all entry points when running in dev-server mode.

### Building

```
npm run build
bundle files will appear in ./public/assets/
```

### Linting

This boilerplate includes React-friendly ESLint configuration with Airbnb style guideline. Eslint runs automatically on each build.

### Profiling

```
npm --silent run profiler > profile
upload file to http://webpack.github.io/analyse/
```

### Configuration

You can change build configuration in `build.js`
* `WEBPACK_ENTRY` webpack entry point
* `PUBLIC_PATH` public path for assets
* `CONTENT_BASE` content base
* `SOURCE_PATH` sources path
* `OUTPUT_JS` output js name
* `OUTPUT_CSS` output css name
* `OUTPUT_FONTS` output fonts name
* `OUTPUT_MEDIA` output media name
* `EXTRACT_CSS` if true, css will be extracted into `OUTPUT_CSS`. if false - included into `OUTPUT_JS`

For example you want to change fonts public path from `/assets/` to `/assets/fonts/`:

```
mkdir ./public/assets/fonts/
change OUTPUT_FONTS to ./fonts/[hash].[ext]
```

### Proxying

To enable proxying requests (api, backend, etc) in dev-server mode you can change `DEV_SERVER_PROXY_PORT` and `DEV_SERVER_PROXY_HOST` in `build.js`.


### Using `0.0.0.0` as Host

You may want to change the host `DEV_SERVER_HOST` in `build.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network.