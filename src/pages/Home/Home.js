import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/GoogleAds/Banner";
function Home() {
    // const [showBannerAd, setShowBannerAd] = useState(true);

    // const closeBannerAd = () => {
    //     setShowBannerAd(false);
    //     // Nếu bạn muốn thực hiện một số logic khi quảng cáo đóng, bạn có thể đặt nó ở đây.
    // };
    return (
        <>
            <Header />
            <Content />
            <Footer />
            {/* {showBannerAd && (
                <Banner
                    images="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
                    onClose={closeBannerAd}
                    dataHref="https://www.thegioididong.com/dtdd/samsung-galaxy-s9"
                />
            )} */}
        </>
    );
}

export default Home;
