import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function PopupModal({ children, className="", enabled=false, setLoginEnabled=null } : { children?: React.ReactNode, className?: string, enabled?: boolean, setLoginEnabled?: any }) {
    useEffect(() => {

        const handleWindowWheel = (event: WheelEvent) => {
            if (enabled) {
                event.preventDefault();
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (setLoginEnabled && event.key === 'Escape')  {
                setLoginEnabled(false);
            }
        }

        window.addEventListener('wheel', handleWindowWheel, { passive: false });
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('wheel', handleWindowWheel);
            window.removeEventListener('keydown', handleEsc);
        };

    }, [enabled]);
    
    return (
        <>
            <div onClick={() => {setLoginEnabled(false)}} className={`fixed w-screen h-screen z-40 bg-neutral-100 opacity-50 ${enabled ? 'flex' : 'hidden'}`}></div>
            <div className={`fixed z-50 ${enabled ? 'flex flex-col' : 'hidden'} ${className}`}>
                <div className="w-full flex justify-end">
                    <button onClick={() => { if (setLoginEnabled) setLoginEnabled(false)}}>
                        <FaXmark className="text-3xl text-neutral-300 hover:text-red-500 transition ease-in-out delay-50 duration-200" />
                    </button>
                </div>
                {children}
            </div>
        </>
    )
}