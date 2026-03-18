import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link'; // Import Link for routing

const Plans = () => {
  const plans = [
    { name: "Starter", price: "999", duration: "1 Month", features: ["Full Gym Access", "General Training"] },
    { name: "Quarterly", price: "2499", duration: "3 Months", features: ["Diet Plan", "Progress Tracking"], popular: true },
    { name: "Half Yearly", price: "4499", duration: "6 Months", features: ["Personalized Workout", "Supplement Guide"] },
    { name: "Annual Elite", price: "7999", duration: "12 Months", features: ["VIP Support", "Free Gym Kit"] },
  ];

  return (
    <section id="plans" className="py-20 bg-black/50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-4xl md:text-6xl font-black uppercase italic">Membership <span className="text-orange-500">Plans</span></h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((p, i) => (
          <div key={i} className={`p-8 border-2 flex flex-col ${p.popular ? 'border-orange-500 bg-zinc-900 scale-100 md:scale-105 shadow-2xl' : 'border-white/5 bg-zinc-950'}`}>
            <h4 className="text-orange-500 font-black uppercase text-sm mb-1">{p.duration}</h4>
            <p className="text-2xl font-black uppercase mb-4">{p.name}</p>
            <div className="text-5xl font-black mb-8 italic text-white/90">₹{p.price}/-</div>
            
            {/* Added flex-grow so buttons always align perfectly at the bottom */}
            <ul className="space-y-3 mb-8 text-xs font-bold uppercase text-gray-400 flex-grow">
              {p.features.map(f => <li key={f} className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-orange-500" /> {f}</li>)}
            </ul>
            
            {/* CTA replaced with Link passing URL Query */}
            <Link 
              href={`/inquire?plan=${encodeURIComponent(p.name)}`} 
              className={`w-full py-4 text-center font-black uppercase tracking-tighter block transition-all ${p.popular ? 'bg-orange-600 text-black hover:bg-white' : 'bg-white text-black hover:bg-orange-600 hover:text-white'}`}
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