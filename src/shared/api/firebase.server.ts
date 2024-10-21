import "server-only";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../config";

const firebase = initializeApp(firebaseConfig);
export const database = getFirestore(firebase);
