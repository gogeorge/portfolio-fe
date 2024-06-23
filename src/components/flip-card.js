import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';
import TimeText from './time-text';

const FlipCard = (props) => {
    const { url, title, date, tech } = props
    const [flipped, setFlipped] = useState(false);

    return (
        <div className='py-2'>
            <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                <div
                    className="rounded-xl bg-slate-800 w-88 h-16"
                    onMouseEnter={() => setFlipped(true)}
                >
                    <div className="flex space-x-4">
                        <Image
                            className='relative top-2 left-2'
                            src={url}
                            alt=''
                            width={50}
                            height={50}
                        />
                        <h2 className='relative top-3 left-4 text-3xl'>{title}</h2>
                        <p className='text-gray-500 absolute top-5 right-4 '>~ <TimeText date={date}/> months ago</p>
                    </div>
                </div>
                <div
                    className="rounded-xl bg-slate-800 w-88 h-16"
                    onMouseLeave={() => setFlipped(false)}
                    // onClick={() => setFlipped(false)}
                >
                    <div className="flex space-x-4 relative top-4 left-4">
                        {tech.map(val => (
                            <div className='rounded-xl bg-accent-500 w-auto h-8 p-2'>
                                <p className='text-white -mt-1'>{val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default FlipCard