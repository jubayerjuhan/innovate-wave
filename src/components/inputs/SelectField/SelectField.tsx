import styles from "./SelectField.module.scss";

const SelectField = ({ options, style, ...otherProps }: any) => {
  return (
    <div className={styles.selectGroup} style={style}>
      <select className={styles.selectControl} {...otherProps}>
        {options?.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
