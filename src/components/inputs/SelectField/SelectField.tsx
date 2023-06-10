import styles from "./SelectField.module.scss";
import { SelectFieldProps } from "./types";

const SelectField = ({
  style,
  options,
  name,
  placeholder,
  label,
  ...props
}: SelectFieldProps) => {
  return (
    <div className={styles.selectGroup} style={style}>
      <select
        className={styles.selectControl}
        name={name}
        placeholder={placeholder}
        {...props}
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
