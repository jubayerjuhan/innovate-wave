import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./SelectField.module.scss";
import { SelectFieldProps } from "./types";

const SelectField = ({
  style,
  options,
  name,
  placeholder,
  errorMessage,
  label,
  ...props
}: SelectFieldProps) => {
  return (
    <div>
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
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default SelectField;
