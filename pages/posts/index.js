import React, { Fragment } from "react";
import AllPosts from "../../components/Posts/allPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
export default function Posts(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    // revalidate: 60,
  };
}
