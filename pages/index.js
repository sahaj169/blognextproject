import React, { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
export default function Home(props) {
  return (
    <Fragment>
    <Head>
      <title>Sahaj's Blog</title>
      <meta name="description" content="I post about programming and web development." />
    </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
