import FlipCard from "../flip-card"

const Projects = () => {
    return (
        <div className="row-span-5 rounded-xl border border-slate-400/80 p-4 bg-slate-900 text-white">
            <div className="flex items-center space-x-4">
                <div className="w-full">
                    <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
                    <FlipCard 
                        url='/icons/vellure_symbol_caramel.png'
                        title='Vellure'
                        date='2024-01-01'
                        tech={['NextJs', 'PayloadCMS', 'MongoDB']}
                    />
                    <FlipCard 
                        url='/icons/bizdash-2.png'
                        title='BizDash'
                        date='2023-06-01'
                        tech={['NextJs', 'NodeJs', 'MongoDB']}
                    />
                    <FlipCard 
                        url='/icons/posturify.png'
                        title='Posturify'
                        date='2022-08-04'
                        tech={['React Native', 'TypeScript', 'Firebase']}
                    />
                    <FlipCard 
                        url=''
                        title='ML Trading Bot'
                        date='2022-08-04'
                        tech={['Python']}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects