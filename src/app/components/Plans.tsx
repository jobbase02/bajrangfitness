import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link'; // Import Link for routing

type PlanType = {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
};

const Plans = () => {
  const plans: PlanType[] = [
    { name: "Starter", price: "999", duration: "1 Month" },
    { name: "Quarterly", price: "2499", duration: "3 Months" },
    { name: "Half Yearly", price: "4499", duration: "6 Months" },
    { name: "Annual Elite", price: "7999", duration: "12 Months" },
  ];

  return (
    <section id="plans" className="py-20 bg-black/50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-4xl md:text-6xl font-black uppercase italic">Choose Plan
          That <br /> <span className="text-orange-500 font-serif italic mb-6">Fits Your Life.</span></h3>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-medium text-sm md:text-base leading-relaxed">
          No hidden charges, no long-term pressure. Just flexible memberships built for the people of Haldwani, at a price that makes sense.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {plans.map((p, i) => (
          <div key={i} className={`relative p-8 border-2 flex flex-col transition-transform duration-300 ${p.popular ? 'border-orange-500 bg-zinc-900 scale-100 lg:scale-110 shadow-[0_0_30px_rgba(249,115,22,0.15)] z-10' : 'border-white/5 bg-zinc-950 hover:border-white/20'}`}>
            {p.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-[11px] font-black uppercase tracking-[0.2em] py-1.5 px-4 whitespace-nowrap shadow-lg">
                Most Popular
              </div>
            )}
            <h4 className="text-orange-500 font-black uppercase text-sm mb-1">{p.duration}</h4>
            <p className="text-2xl font-black uppercase mb-4">{p.name}</p>
            <div className="text-5xl font-black mb-8 italic text-white/90">₹{p.price}/-</div>

            {/* Spacer to push buttons to bottom uniformly */}
            <div className="flex-grow min-h-[40px]"></div>

            {/* CTA replaced with Link passing URL Query */}
            <Link
              href={`/inquire?plan=${encodeURIComponent(p.name)}`}
              className={`mt-auto w-full py-4 text-center font-black uppercase tracking-tighter block transition-all ${p.popular ? 'bg-orange-600 text-black hover:bg-white' : 'bg-white text-black hover:bg-orange-600 hover:text-white'}`}
            >
              Join Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;