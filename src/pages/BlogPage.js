import Header from "../components/Header/Header";
import Blog from "../components/Content/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import BlogPost from "../components/Content/Blogs/BlogPost"

function BlogPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                <Blog />
                <BlogPost />
            </div>
            <Footer />

        </>
    );
}

export default BlogPage;
