import React, { useEffect, useState } from "react";

export default function Clock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
 
        const id = setInterval(() => setNow(new Date()), 250);
        return () => clearInterval(id);
    }, []);

    function two(n) {
        return String(n).padStart(2, "0");
    }

    const hoursRaw = now.getHours();
    const minutes = two(now.getMinutes());
    const seconds = two(now.getSeconds());
    const ampm = hoursRaw >= 12 ? "PM" : "AM";

    let hoursDisplay = hoursRaw;

    const hours = two(hoursDisplay);

    const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
    const dateStr = now.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="w-56 text-white mx-10 hidden lg:block">
            <span className="inline-block align-middle">{hours}</span>
            <span className="mx-1">:</span>
            <span className="inline-block align-middle">{minutes}</span>
            <span className="mx-1">:</span>
            <span className="mx-1">{seconds}</span>
            <span className="text-[15px]">{ampm}</span>
            <div className="hidden md:inline-block">
                <span className="text-slate-300 text-sm mr-2">{dayName}</span>
                <span className="text-white text-sm">{dateStr}</span>
            </div>
        </div>
    );
}
