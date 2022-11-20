import React, { Fragment } from "react";
import PostContent from "../../components/Posts/PostDetails/postContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
export default function SinglePost(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const PostData = getPostData(slug);
  return {
    props: {
      post: PostData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
