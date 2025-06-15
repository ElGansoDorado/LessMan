import { UseFormRegister, FieldError } from "react-hook-form";
import classes from "./auth-input.module.css";


type FormData = {
  username: string;
  email: string;
  password: string;
}

type Props = {
  type: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconButton?: React.ReactNode;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  required: boolean;
  errors?: FieldError | undefined;
};

export default function AuthInput({
  type,
  placeholder,
  icon,
  iconButton,
  register,
  name,
  required,
  errors,
}: Props) {
  return (
    <label className={classes.container}>
      <div className={classes.icon}>
        {icon}
      </div>

      <input
        className={`${classes.input} ${errors && classes.error}`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })} />

      <div className={classes.iconButton}>
        {iconButton}
      </div>
    </label>
  );
}
