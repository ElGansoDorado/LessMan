import AuthInput from "./auth-input/auth-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRegister } from "../api/use-register";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faEye,
  faEyeSlash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const registerSchema = z
  .object({
    username: z.string().min(2, "имя не может быть короче 2 символов"),
    email: z
      .string({
        required_error: "Email обязателен",
      })
      .email("Неверный email"),
    password: z
      .string({
        required_error: "Password обязателен",
      })
      .min(8, "Пароль не должен быть короче 8 символов"),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "пароли не совпадают",
  });

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { regist, errorMessage, isPending } = useRegister();

  return (
    <form onSubmit={handleSubmit(regist)}>
      <AuthInput
        type="text"
        placeholder="name..."
        icon={<FontAwesomeIcon icon={faUser} />}
        name="username"
        register={register}
        errors={errors.username}
      />
      <AuthInput
        type="email"
        placeholder="email..."
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        name="email"
        register={register}
        errors={errors.email}
      />
      <AuthInput
        type={showPassword ? "text" : "password"}
        placeholder="password..."
        icon={<FontAwesomeIcon icon={faLock} />}
        iconButton={
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
          />
        }
        name="password"
        register={register}
        errors={errors.password}
      />
      <AuthInput
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password..."
        icon={<FontAwesomeIcon icon={faLock} />}
        iconButton={
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
          />
        }
        name="confirmPassword"
        register={register}
        errors={errors.password}
      />

      {errorMessage && <p>{errorMessage}</p>}

      <button disabled={isPending} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}
