import styles from "../../styles/images/logo.module.css";
const LogoImage = ({src, alt}) => {
  
  return (
    <img
      className={styles.logo}
      src={src}
      alt={alt}
    />
  );
}

export default LogoImage;