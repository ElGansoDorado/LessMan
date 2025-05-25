import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, NextOrObserver, User, Unsubscribe, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, get, query } from 'firebase/database';
import { redirect } from "react-router";

import firebaseApp from "../configs/firebaseConfig";

const database = getDatabase(firebaseApp);
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
    catch (err) {
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

export async function updateUserInfo({ request }: { request: Request }) {
    const currentUserId = getUserId();
    if (!currentUserId) {
        return redirect('/login');
    }

    const fd = await request.formData();

    const newUserInfo = {
        photo: fd.get('photo') as string,
        name: fd.get('name') as string,
        desc: fd.get('desc') as string,
        telegram: fd.get('telegram') as string,
        instagram: fd.get('instagram') as string,
    }

    const db = ref(database, `users/${currentUserId}/info`);
    await set(db, newUserInfo);
    return redirect('/profile');
}

export async function getUserInfo() {
    const currentUserId = getUserId();

    if (!currentUserId) {
        return redirect('/profile');
    }

    const r = ref(database, `users/${currentUserId}/info`);
    const q = query(r);
    const s = await get(q);

    if (!s.exists()) {
        throw new Error();
    }

    return s.val();
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