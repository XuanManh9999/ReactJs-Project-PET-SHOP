import React from "react";
import Header from "../components/Header/Header";
import Blog from "../components/Content/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import BlogPost from "../components/Content/Blogs/BlogPost";
import Dflex from "../components/Common/Dflex";
function BlogPage() {
  return (
    <>
      <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
      <Dflex>
        <Blog />
        <BlogPost />
      </Dflex>
      <Footer />
    </>
  );
}

export default BlogPage;
