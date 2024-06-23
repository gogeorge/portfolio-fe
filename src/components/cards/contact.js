import Image from "next/image";

const Contact = () => {
    return (
        <div className="row-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900 text-white">
            <div className="flex items-center space-x-4">
                <div className="w-full">
                    <h2 className="text-xl font-bold">Contact me</h2>
                    <p><span className="text-gray-500">For work</span>  grvaltas@gmail.com</p> 
                    <p className="text-gray-500">Socials</p>
                    <div className="flex space-x-4 relative top-2 left-4">
                        <div className="w-8 h-8">
                            <Image 
                                className="" 
                                width={256}
                                height={256}
                                src="/icons/linkedin.png" 
                                alt="linkedin"
                            />
                        </div>
                        <div className="w-8 h-8">
                            <Image 
                                className="" 
                                width={256}
                                height={256}
                                src="/icons/github.png" 
                                alt="github"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact