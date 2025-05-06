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
            setErrorPasswordConfirm('Слишком простой пароль');
        }
        fetcher.data = undefined;
    }

    const validate = () => {
        resetErrorMessages();
        if (!email) {
            setErrorEmail('Адрес электронной почты не указан');
            return false;
        }
        if (!password) {
            setErrorPassword("Пароль не указан");
            return false;
        }
        if (!passwordConfirm) {
            setErrorPasswordConfirm("Повтор пароля не указан");
            return false;
        }
        if (password !== passwordConfirm) {
            setErrorPassword("Выделенные пароли не совпадают");
            setErrorPasswordConfirm("Выделенные пароли не совпадают");
            return false;
        }
        return true;
    };

    
    const handleFormSubmit = (evt : any) => {
        evt.preventDefault();
        if (validate()) {
            fetcher.submit({ email, password },
                { action: '/sign-up', method: 'post' });
        }
    };

    return <form className={classes.box} onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <h1>Sign Up</h1>

        <AuthInput id="email" type="email" value={email} setValue={setEmail}/>
        <AuthInput id="password" type="password" value={password} setValue={setPassword}/>
        <AuthInput id="passwordConfirm" type="password" value={passwordConfirm} setValue={setPasswordConfirm}/>

        <div className={classes.button}>
            <input name="submit" type="submit" value='Зарегистрироваться' />
        </div>
    </form>
}