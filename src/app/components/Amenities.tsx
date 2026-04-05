import React from 'react';
import { Dumbbell, Wind, Wifi, Lock, Car, Package } from 'lucide-react';

const AMENITIES_LIST = [
    {
        title: "Pro Equipment",
        description: "Imported biomechanics and free weights.",
        icon: <Dumbbell size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
    {
        title: "Air Conditioned",
        description: "Fully climate-controlled environment.",
        icon: <Wind size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
    {
        title: "Free Wi-Fi",
        description: "High-speed internet across the floor.",
        icon: <Wifi size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
    {
        title: "Locker Rooms",
        description: "Secure storage for all your belongings.",
        icon: <Lock size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
    {
        title: "Free Parking",
        description: "Ample parking space just out front.",
        icon: <Car size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
    {
        title: "Supplement Store",
        description: "Premium proteins, pre-workouts & more.",
        icon: <Package size={28} className="text-orange-500 group-hover:text-white transition-colors" />,
    },
];

const Amenities = () => {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#050505]">

            {/* HEADER */}
            <div className="mb-14 text-center">
                <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-3">Facility Offerings</h2>
                <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
                    Premium <span className="text-orange-500 italic decoration-4 underline-offset-8 decoration-orange-500/30 underline">Amenities</span>
                </h3>
                <p className="text-gray-400 mt-6 max-w-xl mx-auto font-medium text-sm md:text-base leading-relaxed">
                    Everything you need for a distraction-free workout. We've got the essentials covered so you can focus entirely on pushing your limits.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {AMENITIES_LIST.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-orange-500/50 p-8 rounded-3xl transition-all duration-300 overflow-hidden"
                    >
                        {/* Subtle glow on hover */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/0 rounded-full blur-[40px] -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-orange-600/10 pointer-events-none" />

                        <div className="bg-black/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-orange-500/20">
                            {item.icon}
                        </div>

                        <h4 className="text-white font-black uppercase tracking-wide text-lg mb-2">
                            {item.title}
                        </h4>

                        <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Amenities;
