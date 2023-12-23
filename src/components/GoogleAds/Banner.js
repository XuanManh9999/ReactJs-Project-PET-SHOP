// BannerAd.js
import React, { useState, useEffect } from "react";
import "./Banner.css";

const BannerAd = ({ onClose, images, dataHref }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setShow(true);
        }, 15000); // Hiển thị quảng cáo mỗi 15 giây

        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className="container">
            <div className={`banner-ad ${show ? "show" : ""}`}>
                <div className="ad-content">
                    <button className="btn" onClick={handleClose}>
                        Đóng
                    </button>
                    <a href={dataHref} target="_blank" rel="noreferrer">
                        <img src={images} alt="Quảng cáo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BannerAd;