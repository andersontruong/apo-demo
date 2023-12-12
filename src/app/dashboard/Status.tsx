

function ProgressBar({ className="", ratio }: { className?: string, ratio: number }) {
    return (
        <div className={`w-full bg-gray-200 rounded-full ${className}`}>
            <div className="bg-blue-700 h-full rounded-full" style={{ width: `${ratio * 100}%` }}/>
        </div>
    )
}

export default function Status({ className }: { className?: string }) {
    return (
        <div className={` ${className}`}>
            <ProgressBar className="h-[20px]" ratio={0.3}/>
        </div>
    )
}