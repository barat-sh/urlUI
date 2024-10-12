import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";


interface LongURLResponse {
    longURL: string;
}

const Redirect = () => {
    const { id } = useParams();

    useLayoutEffect(()=>{
        async function Fetch(){
            try{
                const resp = await fetch(`https://urlworkers.barath-elangovan.workers.dev/api/v1/shorturl/${id}`)
                const data: LongURLResponse = await resp.json();
                window.location.href = data.longURL;
                console.log(data.longURL)
                
            }catch(err){
                console.log(err);
            }
        }

        Fetch();
    }, [])

    return (
        <></>
    )
}

export default Redirect;