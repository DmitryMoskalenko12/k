import { Field, ErrorMessage } from 'formik';

const FormInputBlock = ({
  classes,
  error,
  touched,
  name,
  placeholder,
  type,
  label,
}) => {
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor={label} className={classes.label}>
        {label}
      </label>
      <Field
        id={label}
        className={`${classes.input} ${error && touched ? classes.error : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        className={classes.error_required}
        component={'div'}
      />
    </div>
  );
};

export default FormInputBlock;
