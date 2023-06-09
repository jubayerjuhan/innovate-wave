import styles from "./TextInputField.module.scss";
import { TextInputField } from "./types";

const TextInputField = ({ style, ...otherProps }: TextInputField) => {
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
