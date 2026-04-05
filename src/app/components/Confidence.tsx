import React from 'react';
import { Target, RefreshCcw, MessageSquare } from 'lucide-react';

const Confidence = () => {
    const features = [
        {
            title: "Free First Session",
            description: "Walk in, try the gym floor, meet a trainer completely free. No commitment, no pressure.",
            icon: <Target size={22} className="text-pink-400" />,
            iconBg: "bg-pink-500/10",
            iconBorder: "border-pink-500/20"
        },
        {
            title: "Flexible Pause Option",
            description: "Need to travel or take a break? Pause your membership and resume without losing your plan.",
            icon: <RefreshCcw size={22} className="text-blue-400" />,
            iconBg: "bg-blue-500/10",
            iconBorder: "border-blue-500/20"
        },
        {
            title: "No Hidden Charges",
            description: "What you see is what you pay. Honest, transparent pricing always.",
            icon: <MessageSquare size={22} className="text-purple-300" />,
            iconBg: "bg-purple-500/10",
            iconBorder: "border-purple-500/20"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#050505]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Heading & Text */}
                <div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-2">
                        Join With
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-orange-500 mb-8">
                        Complete Confidence.
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                        We want you to <span className='text-orange-500'>feel at home</span> from day one. That's why every new member at our <span className='text-orange-500'>Haldwani gym</span> gets a <span className='text-orange-500'>risk-free start</span> — no questions asked.
                    </p>
                </div>

                {/* Right Column: Feature Stack */}
                <div className="flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/5 hover:border-orange-500/30 p-6 md:p-8 rounded-3xl transition-all duration-300 flex items-start gap-6 group"
                        >
                            {/* Icon Box */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${feature.iconBg} ${feature.iconBorder} group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-400 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Confidence;
