import React from "react";
import clsx from "clsx";

import SearchItem from "./SearchItem/SearchItem";
import styles from "./Search.module.scss";
function Search({ close_search }) {
    return (
        <div className={clsx(styles.container_search)}>
            <div className={clsx(styles.main_content)}>
                <SearchItem close_search={close_search} />
            </div>
        </div>
    );
}

export default React.memo(Search);
