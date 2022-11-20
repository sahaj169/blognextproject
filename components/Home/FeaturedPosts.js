import React from "react";
import classes from "./featuredPosts.module.css";
import PostGrid from "../Posts/postsGrid";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
