import styles from "./SelectField.module.scss";
import { SelectFieldProps } from "./types";

const SelectField = ({ style, options, ...otherProps }: SelectFieldProps) => {
  const handleChange = (e: any) => {};
  return (
    <div className={styles.selectGroup} style={style}>
      <select
        className={styles.selectControl}
        {...otherProps}
        onChange={handleChange}
      >
        {options?.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
