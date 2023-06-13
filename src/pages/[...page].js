import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from "@builder.io/react";
import "@builder.io/widgets";
import { MyFooter } from "../components/footer";
import { MyHeader } from "../components/header";

import "../components/icon-component";
import "../components/code-block";
import "../components/cards/product-card";
import "../components/cards/blog-card";
import "../components/cards/video-card";
import "../components/cards/testimonial-card";

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
builder.init("ccda6c7abf4c4b8195aa67d47de420dd");

export async function getStaticProps({ params }) {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  /*
    Fetch all published pages for the current model.
    Using the `fields` option will limit the size of the response
    and only return the `data.url` field from the matching pages.
  */
  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }) {
  const router = useRouter();
  /*
    This flag indicates if you are viewing the page in the Builder editor.
  */
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  /*
    Add your error page here. This will happen if there are no matching
    content entries published in Builder.
  */
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      {/* Render the Builder page */}
      <MyHeader />
      <BuilderComponent model="page" content={page} />
      <MyFooter />
    </>
  );
}

/*
  Example of a custom insert menu, this will add a new section to the top
  of your Builder editor. You can add custom icons to your components as well.
  https://forum.builder.io/t/how-to-override-and-re-arrange-the-insert-menu-completely-in-builder/680
*/
Builder.register("insertMenu", {
  name: "Sample Components",
  items: [
    {
      name: "IconComponent",
    },
    {
      name: "ProductCard",
    },
    {
      name: "BlogCard",
    },
    {
      name: "VideoCard",
    },
    {
      name: "TestimonialCard",
    },
    {
      name: "CodeBlock",
    },
  ],
});
