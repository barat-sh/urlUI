import { useEffect } from "react";
import { useParams } from "react-router-dom";


interface LongURLResponse {
    longURL: string;
}

const Redirect = () => {
    const { id } = useParams();

    const fetchLongURL = async () => {
        try {
            const resp = await fetch(`https://urlworkers.barath-elangovan.workers.dev/api/v1/shorturl/${id}`);
            if (!resp.ok) {
                throw new Error("Network response was not ok");
            }
            const data: LongURLResponse = await resp.json();
            window.location.href = data.longURL; // Redirecting to the long URL
            console.log("Redirecting to:", data.longURL);
        } catch (err) {
            console.error("Failed to fetch long URL:", err);
        }
    };

    useEffect(() => {
        fetchLongURL();
    }, [id]);

    return null
}

export default Redirect;