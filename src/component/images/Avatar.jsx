import styles from "../../styles/images/avatar.module.css";

const Avatar = () => {
  return (
    <img
      className={`${styles.avatar} mr-3`}
      src="/public/assets/nigel_engel.jpeg"
      alt="Nigel Engel"
    />
  );
};

export default Avatar;
