import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface LongURLResponse {
    longURL: string;
}

const Redirect = () => {
    const { id } = useParams();
    const [longURL, setLongURL] = useState("");

    const fetchLongURL = async () => {
        try {
            const resp = await fetch(`https://urlworkers.barath-elangovan.workers.dev/api/v1/shorturl/12345`);
            const data: LongURLResponse = await resp.json();
            setLongURL(data.longURL);
            console.log("Redirecting to:", data.longURL);
        } catch (err) {
            console.error("Failed to fetch long URL:", err);
        }
    };

    useEffect(() => {
        fetchLongURL();
    }, [id]);

    useEffect(()=>{
        window.location.href = longURL
    }, [longURL])

    return null
}

export default Redirect;