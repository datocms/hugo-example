# Hugo example website

This repository contains a Hugo website integrated with a DatoCMS site. The site is deployed on Netlify, and can be seen at this URL: https://datocms-hugo-example.netlify.com/

Content stored in a DatoCMS site gets translated into local Hugo files using a NodeJs module called `datocms-client` you need to add to your Hugo project. The translation rules are defined in file placed in your project root folder called [dato.config.js](https://github.com/datocms/hugo-example/blob/master/dato.config.js).

To read more about the `datocms-client` package, please refer to [its documentation](https://www.datocms.com/docs/hugo).

## Usage

First, setup the DatoCMS project and schema with this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/hugo-example)

Then install the dependencies of this project:

```
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
npm start
```

To build the final, production ready static website:

```
npm run build
```

The final result will be saved in the `public` directory.

## Website preview

![Website screenshot](https://raw.githubusercontent.com/datocms/jekyll-example/master/screenshot.png)

