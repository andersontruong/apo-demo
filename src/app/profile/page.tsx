'use client';

import UserNavbar from "@/components/UserNavbar";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

function InputField({ label, placeholder, setValue=()=>{} }: { label: string, placeholder?: string, setValue?: any }) {
    const [val, setVal] = useState<string>("");
    
    return (
        <div className="space-y-1 w-full text-sm">
            <label className="font-medium">{label}</label>
            <input 
                type="text" 
                className="w-full p-2 rounded-xl outline outline-2 outline-neutral-200 focus:outline-blue-200" 
                value={val}
                onChange={(e) => { setVal(e.target.value); setValue(e.target.value); }}
                placeholder={placeholder}
            />
        </div>
    )
}

export default function Profile() {
    return (
        <main className="flex flex-col w-full min-h-screen items-center">
            <UserNavbar />
            <div className="grow flex justify-center bg-neutral-100 w-full">
                <div className="flex flex-col items-center space-y-8 justify-between my-8 p-8 bg-white w-1/3 rounded-xl drop-shadow-xl">
                    <div className="flex flex-col items-center space-y-4 w-full">
                        <FaCircleUser className="text-6xl" />
                        <h1 className="text-2xl">Thane Cooley</h1>
                        <InputField label="Email" placeholder="Ex: thanecooley@apo.org"/>
                        <InputField label="Phone Number" placeholder="(000) 000-0000" />
                        <InputField label="Major" placeholder="Ex: Biology" />
                        <div className="space-y-1 w-full text-sm">
                            <label className="font-medium">Biography</label>
                            <textarea
                                className="w-full p-2 rounded-xl outline outline-2 outline-neutral-200 focus:outline-blue-200" 
                                value={""}
                                placeholder="Describe yourself..."
                            />
                        </div>
                    </div>
                    <button className="bg-black hover:bg-neutral-700 text-white py-2 px-4 rounded-xl">
                        Save
                    </button>
                </div>
            </div>
        </main>
    )
}