import { Button } from "@/components/ui/button";
import { useState } from "react";
import Popup from "@/store/Popup";

interface ShortURLResponse {
    shortURL: string;
}

const Entry = () => {
    const [ longURL, setLongURL ] = useState('');
    const [ shortURL, setShortURL ] = useState('');
    const [ showPopup, setShowPopup ] = useState(false);

    const handleGenerate = async () => {
        try{
            if(longURL != ""){
                const resp = await fetch("https://urlworkers.barath-elangovan.workers.dev/api/v1/shorturl", {
                    method: "POST",
                    body: JSON.stringify(longURL),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                const data: ShortURLResponse = await resp.json();
                setShortURL(() => data.shortURL)
                setShowPopup(() => !showPopup)
            }else{
                console.log("invalid url")
            }
        }catch(err){
            console.log(err)
        }
    }
    
    return (
    <main>
        <div className="min-h-[50%] p-10 space-y-4 border-2 rounded-sm">
            <div>
                <input value={longURL} className="p-1 w-[50%] bg-neutral-700 text-neutral-300 rounded-md" onChange={(e)=>{
                    setLongURL(e.target.value);
                }} />
                <Button onClick={()=>{
                    setLongURL("")
                }}>reset</Button>
            </div>
            <div>
                <Button onClick={handleGenerate}>Generate</Button>
            </div>
        </div>

        {showPopup && <Popup shortURL={shortURL} setShortURL={setShortURL} showPopup={showPopup} setShowPopup={setShowPopup} />}

    </main>
    )
}

export default Entry;