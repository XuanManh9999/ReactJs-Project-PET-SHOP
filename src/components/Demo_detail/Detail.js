// Trong file Detail.js
import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { productId  } = useParams();
    return (
        <div>
            <h1>Detail Page</h1>
            <p>ID: {productId}</p>
        </div>
    );
}

export default Detail;
