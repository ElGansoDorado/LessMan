import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, NextOrObserver, User, Unsubscribe, updateProfile } from "firebase/auth";
import { redirect } from "react-router";

import firebaseApp from "../configs/firebaseConfig";

const auth = getAuth(firebaseApp);

interface FirebaseError {
    code: string;
    message: string;
}

function getUserId() {
    if (auth.currentUser) {
        return auth.currentUser.uid;
    }
    else {
        return window.localStorage.getItem('user-id');
    }
}

export function setStateChangeHandler(func: NextOrObserver<User>): Unsubscribe {
    return onAuthStateChanged(auth, func);
}

export async function register({ request }: { request: Request }) {
    const fd = await request.formData();
    try {
        const cr = await createUserWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string);

        await updateProfile(cr.user, {
            displayName: fd.get('name') as string,
        });

        window.localStorage.setItem('user-id', cr.user.uid);
        return redirect('/');
    }
    catch (err: any) {
        const error = err as FirebaseError;
        return error.code;
    }
}

export async function login({ request }: { request: Request }) {

    const fd = await request.formData();
    try {
        const cr = await signInWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string);
        window.localStorage.setItem('user-id', cr.user.uid);
        return redirect('/');
    }
    catch (err) {
        const error = err as FirebaseError;
        return error.code;
    }
}

export async function logout() {
    await signOut(auth);
    window.localStorage.removeItem('user-id');
    return redirect('/auth/sign-up');
}

export function onlyLoggedOut() {
    if (getUserId()) {
        return redirect('/');
    }
    else {
        return null;
    }
}