import { useEffect, useState } from "react";


const TimeText = ({ date }) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log('date ', date)
        const today = new Date();
        const pastDate = new Date(date);
        const diffTime = today - pastDate;
        
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
        const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

        console.log(`It has been ${diffYears} years, ${diffMonths} months, and ${diffDays} days since 19/03/2001.`);
        
        if (diffYears >= 1) setTime(diffYears)
        else if (diffMonths >= 1) setTime(diffMonths)
        else setTime(diffDays)
    }, [])

    return time
}

export default TimeText