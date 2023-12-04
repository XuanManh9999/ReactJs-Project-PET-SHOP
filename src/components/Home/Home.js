// Home.js
import clsx from "clsx";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { getData } from "../../services/demo";

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (!data) {
            fetchData();
        }
    }, [data]);

    return (
        <div>
            <h1 className={clsx("title")}>Home</h1>
            {data && (
                <ul>
                    {data.map((post) => (
                        <li className={clsx(styles.title)} key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
