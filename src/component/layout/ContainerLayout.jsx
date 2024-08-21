import styles from "../../styles/layout/container.module.css";

const ContainerLayout = ({ children }) => {
  return <div className={`${styles.container} mx-auto p-3 border border-dark`}>{children}</div>;
};

export default ContainerLayout;
