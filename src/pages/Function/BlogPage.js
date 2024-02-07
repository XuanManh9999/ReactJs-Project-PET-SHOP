import React from "react";
import Blog from "../../components/Content/Blogs/Blog";
import BlogPost from "../../components/Content/Blogs/BlogPost";
import Dflex from "../../components/Common/Dflex";
import Wrap from "../Wrap/Wrap";
function BlogPage() {
  return (
    <>
      <Wrap>
        <Dflex>
          <Blog />
          <BlogPost />
        </Dflex>
      </Wrap>
    </>
  );
}

export default BlogPage;
