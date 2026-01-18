import Link from "next/link";

export default function notFound(){
    return <div className="flex flex-col items-center justify-center
    min-h-svh bg-white px-4">
        <h1 className="text-6xl text-amber-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl mb-2 text-center">없다는 데요?</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md w-full">
            뭐... 그렇게 됐습니다...
        </p>
        <Link href="/" className="btn-primary">Return Home</Link>
    </div>
}