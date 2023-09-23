export const computedFieldProps = ({ fieldName, setValue, watch }) => {
  const onChange = (e) => {
    setValue(fieldName, e.target.value);
  };
  return { onChange, value: watch(fieldName) };
};
