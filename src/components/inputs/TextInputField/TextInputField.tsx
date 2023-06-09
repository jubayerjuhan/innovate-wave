import styles from "./TextInputField.module.scss";
import { TextInputField } from "./types";

const TextInputField = ({ style, placeholder }: TextInputField) => {
  return (
    <div className={styles.inputGroup} style={style}>
      <input
        type="text"
        className={styles.formControl}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputField;
