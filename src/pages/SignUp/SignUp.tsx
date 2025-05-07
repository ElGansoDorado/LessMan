import classes from "./SignUp.module.css"

import AuthInput from "../../components/UI/input/AuthInput/AuthInput";

import { useState } from "react";
import { useFetcher } from "react-router";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');

    const [isShowPassword, setIsShowPassword] = useState('password');
    const fetcher = useFetcher();

    const handleFormReset = () => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };

    const resetErrorMessages = () => {
        setErrorEmail('');
        setErrorPassword('');
        setErrorPasswordConfirm('');
    };

    if (fetcher.data) {
        resetErrorMessages();
        if (fetcher.data === 'auth/email-already-in-use') {
            setErrorEmail('Посетитель c таким адресом электронной почты уже зарегистрирован');

        }
        else if (fetcher.data === 'auth/weak-password') {
            setErrorPassword('Слишком простой пароль');
        }
        fetcher.data = undefined;
    }

    const validate = () => {
        resetErrorMessages();
        if (!email) {
            setErrorEmail('Адрес электронной почты не указан!');
            return false;
        }
        if (!password) {
            setErrorPassword("Пароль не указан!");
            return false;
        }
        if (!passwordConfirm) {
            setErrorPasswordConfirm("Повтор пароля не указан!");
            return false;
        }
        if (password !== passwordConfirm) {
            setErrorPassword("Выделенные пароли не совпадают!");
            return false;
        }
        return true;
    };


    const handleFormSubmit = (evt: any) => {
        evt.preventDefault();
        if (validate()) {
            fetcher.submit({ email, password },
                { action: '/authentication/sign-up', method: 'post' });
        }
    };

    return <form className={classes.box} onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <h1 className='title'>Sign Up</h1>
        <div>
            <span className={classes.inputBox}>
                <AuthInput
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    setValue={setEmail}
                    error={errorEmail} />

                <AuthInput
                    id="password"
                    type={isShowPassword}
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    error={errorPassword} />

                <AuthInput
                    id="passwordConfirm"
                    type={isShowPassword}
                    label="Password confirm"
                    value={passwordConfirm}
                    setValue={setPasswordConfirm}
                    error={errorPasswordConfirm} />
            </span>

            <div className={classes.helper}>
                <p onClick={() => setIsShowPassword(isShowPassword === 'password' ? 'text' : 'password')}>
                    {isShowPassword === 'password' ? 'Показать пароль' : 'Скрыть пароль'}
                </p>
                <p>Забыли пароль?</p>
            </div>
        </div>

        <div className='submit'>
            <input name="submit" type="submit" value='Create an account' />
            {errorEmail && <p className="error">{errorEmail}</p>}
            {errorPassword && <p className="error">{errorPassword}</p>}
            {errorPasswordConfirm && <p className="error">{errorPasswordConfirm}</p>}
        </div>

        <p className='separator'>OR</p>

        <ul className='via-website'>
            <li>G</li>
            <li>D</li>
            <li>V</li>
        </ul>
    </form>
}