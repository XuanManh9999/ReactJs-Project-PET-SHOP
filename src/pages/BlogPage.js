import React, { useState } from "react";
import Header from "../components/Header/Header";
import Blog from "../components/Content/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import BlogPost from "../components/Content/Blogs/BlogPost";
import Banner from "../components/GoogleAds/Banner";
function BlogPage() {
    const [showBannerAd, setShowBannerAd] = useState(true);

    const closeBannerAd = () => {
        setShowBannerAd(false);
        // Nếu bạn muốn thực hiện một số logic khi quảng cáo đóng, bạn có thể đặt nó ở đây.
    };
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                }}
            >
                <Blog />
                <BlogPost />
            </div>
            <Footer />
            {showBannerAd && (
                <Banner
                    images="https://insieutoc.vn/wp-content/uploads/2021/02/banner-quang-cao-tuyen-sinh.jpg"
                    onClose={closeBannerAd}
                    dataHref="https://www.hutech.edu.vn/xet-tuyen-dai-hoc"
                />
            )}
        </>
    );
}

export default BlogPage;
