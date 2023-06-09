import styles from "./SelectField.module.scss";
import { SelectFieldProps } from "./types";

const SelectField = ({
  style,
  options,
  name,
  placeholder,
  label,
}: SelectFieldProps) => {
  const handleChange = (e: any) => {};
  return (
    <div className={styles.selectGroup} style={style}>
      <select
        className={styles.selectControl}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
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
