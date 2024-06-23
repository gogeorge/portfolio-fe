import Image from "next/image";

const Bio = () => {
    return (
        <div className="row-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900 text-white">
            <h2 className="text-xl font-bold">Bio</h2>
            <div className="flex items-center space-x-4">
                <div className="w-52">
                    Hi, I am Georgios Valtas 🇬🇷 <br/> a developer with a focus on websites and machine learning

                    <p className="text-gray-500 text-xs relative top-2">~19/03/2001</p>
                </div>
                <div className="w-28 h-28 relative left-6">
                    <Image 
                    className="rounded-full object-cover w-full h-full relative -top-4" 
                    width={256}
                    height={256}
                    src="/pfp.jpg" 
                    alt="Profile picture"
                    />
                </div>
            </div>
        </div>
    )
}

export default Bio