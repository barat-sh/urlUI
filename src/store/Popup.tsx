interface PopupProps {
    shortURL: string;
    setShortURL: (url: string) => void;
    showPopup: boolean;
    setShowPopup: (show: boolean) => void;
}

const Popup : React.FC<PopupProps> = ({shortURL, setShortURL ,showPopup, setShowPopup}) => {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-neutral-700 border p-6 rounded-md shadow-lg max-w-sm w-full">
                <div className="flex float-end">
                    <button className="border 2px" onClick={()=>{
                        setShowPopup(!showPopup)
                    }}>x</button>
                </div>
                <h2 className="text-xl font-semibold mb-4">This is your short-URL!</h2>
                <input className="bg-neutral-500" value={shortURL} />
                <button className="bg-neutral-900" onClick={()=>{
                    navigator.clipboard.writeText(shortURL).then(() => {
                        console.log('Text copied to clipboard');
                    }).catch(err => {
                        console.error('Failed to copy text to clipboard: ', err);
                    });
                }}>
                    copy
                </button>
            </div>
        </div>
    )
}

export default Popup;