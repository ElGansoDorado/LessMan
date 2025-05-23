import AuthInput from "../../components/ui/input/authInput/AuthInput";

import { useState } from "react";
import { useFetcher } from "react-router";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [isShowPassword, setIsShowPassword] = useState('password');
    const fetcher = useFetcher();

    const handleFormReset = () => {
        setEmail('');
        setPassword('');
    };

    const resetErrorMessages = () => {
        setErrorEmail('');
        setErrorPassword('');
    };

    if (fetcher.data) {
        resetErrorMessages();
        if (fetcher.data === 'auth/invalid-credential') {
            setErrorPassword('Неверный логин или пароль');
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
        return true;
    };


    const handleFormSubmit = (evt: any) => {
        evt.preventDefault();
        if (validate()) {
            fetcher.submit({ email, password },
                { action: '/authentication/sign-in', method: 'post' });
        }
    };

    return <form className='container' onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <h1 className='title'>Sign In</h1>
        <div>
            <span className='box'>
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
            </span>

            <div className='helper'>
                <p onClick={() => setIsShowPassword(isShowPassword === 'password' ? 'text' : 'password')}>
                    {isShowPassword === 'password' ? 'Показать пароль' : 'Скрыть пароль'}
                </p>
                <p>Забыли пароль?</p>
            </div>
        </div>

        <div className='submit'>
            <input name="submit" type="submit" value='Login to your account' />
            {errorEmail && <p className="error">{errorEmail}</p>}
            {errorPassword && <p className="error">{errorPassword}</p>}
        </div>

        <p className='separator'>OR</p>

        <ul className='via-website'>
            <li>G</li>
            <li>D</li>
            <li>V</li>
        </ul>
    </form>
}