import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push, update, remove, onValue } from "firebase/database";

// Firebase 설정 객체입니다. Firebase 콘솔에서 제공하는 값들로 대체하세요.
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Firebase 초기화 함수
let app;
let analytics;
let database;

function initFirebase() {
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
        analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
        database = getDatabase(app);
    } else {
        app = getApp();
        analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
        database = getDatabase(app);
    }
}

initFirebase();

// 편지 데이터 가져오는 함수
export function fetchLetters(callback) {
    const lettersRef = ref(database, 'letters/');
    onValue(lettersRef, (snapshot) => {
        const data = snapshot.val();
        const lettersData = data ? Object.values(data) : [];
        callback(lettersData);
    });
}

// 편지 데이터 저장하는 함수
export function saveLetter(content, sendAt) {
    const newLetterRef = push(ref(database, 'letters/'));
    set(newLetterRef, {
        content,
        sendAt
    });
}

// 편지 데이터 수정하는 함수
export function updateLetter(id, content, sendAt) {
    const letterRef = ref(database, `letters/${id}`);
    update(letterRef, {
        content,
        sendAt
    });
}

// 편지 데이터 삭제하는 함수
export function deleteLetter(id) {
    const letterRef = ref(database, `letters/${id}`);
    remove(letterRef);
}

export { app, analytics, database };