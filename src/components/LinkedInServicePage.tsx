import { Quote, Linkedin } from "lucide-react";

// Image Constants
const amanImg = "https://media.licdn.com/dms/image/v2/D5603AQFGd0MKzxIKVg/profile-displayphoto-scale_200_200/B56ZjaJfJiG4AY-/0/1756006579143?e=1770249600&v=beta&t=u6wqYIaWMrtYy-49pBhIjru2aIoZLp1iqsxoudeUXYA";
const jordanImg = "https://media.licdn.com/dms/image/v2/D4D03AQHDdmG9LSKSrw/profile-displayphoto-scale_200_200/B4DZkr2I.rJkAY-/0/1757377238966?e=1770249600&v=beta&t=5hPoCGWm0w-EV3zKninUzgTeeDs2RLV2yvFtVMYTqw4";
const kyleImg = "https://media.licdn.com/dms/image/v2/D5603AQE3owjTmQM9Tw/profile-displayphoto-scale_200_200/B56ZivNEYyG0Ac-/0/1755286095861?e=1770249600&v=beta&t=ap674sJdjPilIw36TNiHlKnlEkvQOMCrq6NpDmTrViQ";
const jayImg = "https://media.licdn.com/dms/image/v2/C4E03AQFO-8em7wwr0Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517725580714?e=1770249600&v=beta&t=sPdulpsC-qBlq6KuUMMO35y0cECjxrmZxuOdP4ZFl0A";
const patrickImg = "https://media.licdn.com/dms/image/v2/D4E03AQFJL-xT7mDtpg/profile-displayphoto-scale_200_200/B4EZquYZlhHMAY-/0/1763862224061?e=1770249600&v=beta&t=Ojez51rr8j4ApzNi_ZPbBAa_9wPpZWIA9bpg5Fgnlqc";
const charlesImg = "https://media.licdn.com/dms/image/v2/D5603AQH4wBgvKk-Wcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707755947419?e=1770249600&v=beta&t=1FozAGNDDXXkY3p02Leq0ptPrUIxWaDmS9-W1oPptAI";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Building @IOT-E",
    image: amanImg, 
    content: "We went from inconsistent posting to generating 50+ inbound leads in the first month. The 'Growth Engine' package actually delivers on the execution promise. It's not just strategy; it's results.",
    company: "IOT-E"
  },
  {
    name: "Jordan Mazer",
    role: "Partner @ a16z",
    image: jordanImg,
    content: "In Venture Capital, signal is everything. Most agencies write fluff. This team understood our investment thesis immediately and produced high-signal content that resonated with founders.",
    company: "Andreessen Horowitz"
  },
  {
    name: "Kyle Harrison",
    role: "GP @ Contrary | Writer",
    image: kyleImg,
    content: "I write for a living, so I'm picky. I was skeptical about ghostwriting, but they nailed my tone of voice in the first week. It feels authentic, not like an AI bot.",
    company: "Contrary"
  },
  {
    name: "Jay Chaudhry",
    role: "CEO & Founder @ Zscaler",
    image: jayImg,
    content: "My time is zero. I needed a team that could take a 15-minute brain dump and turn it into a month of executive-level thought leadership. They delivered exactly that.",
    company: "Zscaler"
  },
  {
    name: "Patrick S. Finn",
    role: "Student of the 'How' | Strategy",
    image: patrickImg,
    content: "The strategic roadmap they built wasn't just a content calendar—it was a business development plan disguised as social media. Deep understanding of the 'Why'.",
    company: "Pure Storage"
  },
  {
    name: "Charles Giancarlo",
    role: "CEO @ Pure Storage",
    image: charlesImg,
    content: "Consistency builds trust. We struggled to stay active amidst product launches. Now, our presence is a constant, reliable machine running in the background.",
    company: "Pure Storage"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-neutral-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto px-2">
            From high-growth founders to established VCs, we help the best minds amplify their voice.
          </p>
        </div>

        {/* Testimonials Grid 
            Added gap-y-16 to allow space for the floating heads 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {testimonials.map((client, index) => (
            
            // --- NEW CARD LAYOUT ---
            <div 
              key={index} 
              // Added mt-12 to push the card down so the head doesn't get cut off
              className="group relative flex flex-col items-center mt-12 p-6 pt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all duration-300"
            >
              
              {/* 1. BIG FLOATING IMAGE (Absolute Positioned) */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                 <div className="w-20 h-20 rounded-full border-4 border-neutral-900 bg-neutral-800 overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 {/* Optional: Small Quote Icon Badge on the image */}
                 <div className="absolute bottom-0 right-0 bg-white text-black p-1 rounded-full border-2 border-neutral-900">
                    <Quote size={12} fill="currentColor" />
                 </div>
              </div>

              {/* 2. TOP RIGHT LINKEDIN ICON */}
              <div className="absolute top-4 right-4 text-neutral-600 group-hover:text-[#0077b5] transition-colors">
                 <Linkedin size={20} />
              </div>

              {/* 3. NAME & ROLE (Centered) */}
              <div className="text-center mb-6 w-full">
                <h4 className="text-white text-lg font-semibold flex items-center justify-center gap-1.5 mb-1">
                  {client.name}
                  {/* Verified Check */}
                  <svg className="w-4 h-4 text-blue-500 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path>
                  </svg>
                </h4>
                <p className="text-sm text-neutral-500 font-medium px-2 truncate">
                  {client.role}
                </p>
              </div>

              {/* 4. CONTENT (Centered) */}
              <p className="text-neutral-300 text-base leading-relaxed text-center italic relative z-10">
                "{client.content}"
              </p>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;