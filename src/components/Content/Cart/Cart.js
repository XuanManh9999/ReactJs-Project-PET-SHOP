import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Cart.module.scss";

import Item from "./Cart_item/Item";
import { getDataCardProducts } from "../../../services/hendleProducts";

function Cart() {
    return (
        <div className={clsx(styles.container_cart)}>
            <div className={clsx(styles.content)}>
                <Item />
            </div>
        </div>
    );
}

export default Cart;
