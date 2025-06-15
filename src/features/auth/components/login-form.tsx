import AuthInput from "./auth-input/auth-input"
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useLogin } from "../api/use-login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    faUser,
    faEye,
    faEyeSlash,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const loginSchema = z.object({
    email: z.string({
        required_error: "Email обязателен",
    }).email("Неверный email"),
    password: z.string({
        required_error: "Password обязателен",
    }).min(8, "Пароль не должен быть короче 8 символов"),
    username: z.string().min(2, "имя не может быть короче 2 символов"),
})

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const { login, errorMessage, isPending } = useLogin();

    return <form onSubmit={handleSubmit(login)}>
        <AuthInput
            type="text"
            placeholder="name..."
            icon={<FontAwesomeIcon icon={faUser} />}
            name="username"
            register={register}
            required
            errors={errors.username}/>
        <AuthInput
            type="email"
            placeholder="email..."
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            name="email"
            register={register}
            required
            errors={errors.email}/>
        <AuthInput
            type={showPassword ? "text" : "password"}
            placeholder="password..."
            icon={<FontAwesomeIcon icon={faLock} />}
            iconButton={<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} />}
            name="password"
            register={register}
            required
            errors={errors.password}/>


        { errorMessage && <p>{errorMessage}</p>}

        <button disabled={isPending} type="submit">
            Отправить
        </button>
    </form>
}