import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";


interface LongURLResponse {
    longURL: string;
}

const Redirect = () => {
    const { id } = useParams();

    async function Fetch(){
        try{
            const resp = await fetch(`https://urlworkers.barath-elangovan.workers.dev/api/v1/shorturl/${id}`)
            const data: LongURLResponse = await resp.json();
            console.log(data.longURL)
            window.location.href = data?.longURL;
        }catch(err){
            console.log(err);
        }
    }

    useLayoutEffect(()=>{
        Fetch();
    }, [])

    return (
        <></>
    )
}

export default Redirect;