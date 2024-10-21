export const api = async (input: RequestInfo | URL, init?: RequestInit) => {
    try {
        const res = await fetch(input, init);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
