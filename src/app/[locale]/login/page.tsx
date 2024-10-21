"use client";

import { login, register } from "@/features/auth";

export default function Login() {
    return (
        <main>
            <button
                onClick={async () =>
                    await login({
                        password: "123",
                        email: "ssi009arsenii@gmail.com",
                    })
                }
            >
                Login
            </button>
            <button
                onClick={async () =>
                    await register({
                        password: "123",
                        email: "ssi009arsenii@gmail.com",
                        name: "polyana",
                    })
                }
            >
                Register
            </button>
        </main>
    );
}
