import React from "react";

const STRIP_ITEMS = [
    "TRANSFORM YOUR BODY",
    "•",
    "PUSH YOUR LIMITS",
    "•",
    "BUILD PURE STRENGTH",
    "•",
    "ELEVATE YOUR FITNESS",
    "•",
    "NO EXCUSES",
    "•",
    "TRAIN INSANE",
    "•",
];

const Strip = () => {
    return (
        <div className="w-full bg-[#111111] border-y border-[rgba(255,94,0,0.2)] overflow-hidden flex items-center py-4 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 w-full pointer-events-none" />
            <div className="animate-marquee flex whitespace-nowrap items-center">
                {/* First Half */}
                <div className="flex shrink-0 gap-8 md:gap-16 items-center pr-8 md:pr-16">
                    {STRIP_ITEMS.map((item, index) => (
                        <span
                            key={`first-${index}`}
                            className={`text-xl md:text-2xl font-black uppercase tracking-widest block ${item === "•" ? "text-[#ff5e00]" : "text-white/80"
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                {/* Second Half (Duplicate for seamless loop) */}
                <div className="flex shrink-0 gap-8 md:gap-16 items-center pr-8 md:pr-16">
                    {STRIP_ITEMS.map((item, index) => (
                        <span
                            key={`second-${index}`}
                            className={`text-xl md:text-2xl font-black uppercase tracking-widest block ${item === "•" ? "text-[#ff5e00]" : "text-white/80"
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Strip;
