import { useState } from "react";


export default function InputField({ className, label, placeholder, setValue=()=>{} }: { className?: string, label: string, placeholder?: string, setValue?: any }) {
    const [val, setVal] = useState<string>("");
    
    return (
        <div className={`space-y-1 w-full text-sm ${className}`}>
            <label className="font-medium">{label}</label>
            <input 
                type="text" 
                className="focus:shadow-md w-full p-2 rounded-xl outline outline-2 outline-neutral-200 focus:outline-blue-200" 
                value={val}
                onChange={(e) => { setVal(e.target.value); setValue(e.target.value); }}
                placeholder={placeholder}
            />
        </div>
    )
}