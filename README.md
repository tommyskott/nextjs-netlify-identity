# Next.js Netlify Identity

[![Netlify Status](https://api.netlify.com/api/v1/badges/03b8c26e-5323-41e7-bfa6-b6f3e684c525/deploy-status)](https://app.netlify.com/sites/nextjs-netlify-identity-login/deploys)

A simple component to handle authentication with Netlify Identity, in a [Next.js](https://nextjs.org) project. Using `createContext`, `useEffect`, `useState` in a globally wrapped component.

**Important!** You must deploy your site to Netlify and activate Identity, to make logging in and signing up work. You will need the Next.js plugin installed on your live site, to make Next.js work properly on Netlify. That plugin is developed by Netlify and gets installed automatically on deploy. If deploy fails, check the logs and your build settings, then try to re-deploy again without cache.

## Demo site

Try the demo at: [https://nextjs-netlify-identity-login.netlify.app](https://nextjs-netlify-identity-login.netlify.app)

## Getting Started

```bash
git clone git@github.com:tommyskott/nextjs-netlify-identity.git
cd nextjs-netlify-identity
npm i
npm run dev
```

## Set the local dev url

When clicking the login button you will see the Netlify Identity Widget pop up. First time you will need to set your local development url: `http://localhost:3000`

## Install Netlify cli globally

Make it easier to work locally with Netlify serverless functions, by using [Netlify cli](https://docs.netlify.com/cli/get-started/).

### Install

```bash
npm install netlify-cli -g
```

The next two steps are not mandatory, but it's good to do.

### Login to Netlify with the cli

```bash
ntl login
```

### Link your local project to your live site

```bash
ntl link
```

When that's installed you can run this, instead of `npm run dev`:

```bash
ntl dev
```

This will give you a local environment that works with Netlify serverless functions on: `http://localhost:8888`

## Reset your local dev url

When you're using `ntl dev` you need to clear your development URL in the Netlify Identity Widget pop up and set it to your live site name, e.g: https://nextjs-netlify-identity-login.netlify.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
