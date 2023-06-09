import styles from "./TextInputField.module.scss";

const TextInputField = ({ style, ...otherProps }: any) => {
  return (
    <div className={styles.inputGroup} style={style}>
      <input
        type="text"
        className={styles.formControl}
        placeholder="Input field"
        {...otherProps}
      />
    </div>
  );
};

export default TextInputField;
