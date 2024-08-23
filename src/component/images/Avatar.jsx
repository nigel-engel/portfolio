import styles from "../../styles/images/avatar.module.css";

const Avatar = ({src, alt}) => {
  return (
    <img
      className={`${styles.avatar} mr-3`}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
