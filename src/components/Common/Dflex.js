import styles from "./Dflex.module.scss";
function Dflex({ children }) {
  return <div className={styles.flex}>{children}</div>;
}

export default Dflex;
