import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router";

import firebaseApp from "../configs/firebaseConfig";

const auth = getAuth(firebaseApp);

function getUserId() {
    if (auth.currentUser) {
        return auth.currentUser.uid;
    }
    else {
        return window.localStorage.getItem('user-id');
    }
}

export async function register({request}: any) {
    const fd = await request.formData();
    try {
        const cr = await createUserWithEmailAndPassword( auth, fd.get('email'), fd.get('password'));
        window.localStorage.setItem('user-id', cr.user.uid);
        return redirect('/'); 
    }
    catch(err : any) {
        return err.code;
    }
}

export async function login({request} : any) {
    const fd = await request.formData();
    try {
        const cr = await signInWithEmailAndPassword( auth, fd.get('email'), fd.get('password'));
        window.localStorage.setItem('user-id', cr.user.uid);
        return redirect('/');
    }
    catch (err : any) {
        return err.code;
    }
}

export async function logout() {
    await signOut(auth);
    window.localStorage.removeItem('user-id');
    return redirect('/authentication/sign-up');
}

export function onlyLoggedOut() {
    if (getUserId()) {
        return redirect('/');
    }
    else {
        return null;
    }
}