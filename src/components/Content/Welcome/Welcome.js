import clsx from "clsx";
import styles from "./Welcome.module.scss";
import { FaDollarSign } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign } from "@fortawesome/free-solid-svg-icons";
function Welcome() {
    return (
        <>
            <div>
                <h1>Welcome</h1>
                <i>
                    <FaDollarSign />
                </i>
                <FontAwesomeIcon icon={faDongSign} />
            </div>
        </>
    );
}

export default Welcome;
