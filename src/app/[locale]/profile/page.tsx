"use client";

import { logout } from "@/features/auth";

export default function Profile() {
    return (
        <main>
            <button onClick={() => logout()}>Logout</button>
        </main>
    );
}
