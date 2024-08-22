import styles from "../../styles/layout/container.module.css";

const ContainerLayout = ({ children }) => {
  return <div className={`${styles.container} mx-auto p-3 `}>{children}</div>;
};

export default ContainerLayout;
