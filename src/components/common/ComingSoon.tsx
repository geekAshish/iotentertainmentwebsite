

const ComingSoon = () => {
  return (
    // Main Container: Full screen height, dark background, centered content vertically and horizontally
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Optional subtle background gradient effect to match the vibe */}
      <div className="absolute rounded-full pointer-events-none"></div>
      <div className="absolute rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        
        {/* --- Main Title with Gradient Text --- */}
        {/* Responsive text sizes: text-6xl on mobile, text-8xl on desktop */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter pb-2 bg-gradient-to-r from-[#4ade80] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent leading-tight">
          Coming Soon
        </h1>

        {/* --- Subtitle --- */}
        {/* Responsive text sizes and relaxed leading for better readability */}
        <p className="mt-6 text-lg md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl">
          Just Hold Your Horses 😘
        </p>

      </div>
    </div>
  );
};

export default ComingSoon;