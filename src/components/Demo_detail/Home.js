import { Link } from "react-router-dom";
const data = [
    {
        id: 1,
        name: "Nguyễn Xuân Mạnh",
        detail: "Thôn ninh xã khánh thượng ba vì hà nội",
    },
    {
        id: 2,
        name: "Nguyễn Hoàng Nhi",
        detail: "Minh quang ba vì hà nội",
    },
    {
        id: 3,
        name: "Đinh văn duy",
        detail: "Bắc giang",
    },
    {
        id: 4,
        name: "Hoàng quốc việt",
        detail: "Hà nội",
    },
];
function Home() {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <Link key={index} to={`/product/${item.id}`}>
                        <p > {item.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

export default Home;
