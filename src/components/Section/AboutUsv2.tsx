// --- Placeholder images (replace with your own) ---
const largeImage = "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1740&auto=format&fit=crop";
const smallImage = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop";

export const AboutUsSection = () => {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      {/* Use a wide container, as in the image */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid:
          - Swapped gap-12 for gap-8 for a tighter look
        */}
              <h1 className="text-7xl md:text-9xl font-extrabold text-black leading-none">
                ABOUT
              </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* --- Column 1: Title & Left Text (Spans 1/4 cols) --- */}
          {/* Removed 'gap-6' to use custom margins for better control */}
          <div className="lg:col-span-1 flex flex-col">
            
            {/* Main Title */}
            <div>
              <h1 className="text-7xl md:text-8xl font-extrabold text-black leading-none -mt-4 md:-mt-6">
                US
              </h1>
            </div>
            
            {/* Subtitle (closer to image style) */}
            <p className="text-sm font-medium text-black mt-8"> {/* Changed text-gray-500 to text-black and added margin */}
              Luxurious Interior and Industrial Design
            </p>
            
            {/* Sub-text block (closer to image style) */}
            <div className="mt-10"> {/* Added more top margin */}
              <h3 className="text-xl font-semibold text-black">
                Modern Elegance {/* Removed colon */}
              </h3>
              <p className="text-base text-gray-700 mt-2"> {/* Made text slightly darker */}
                Designs featuring clean lines, neutral palettes, and high-quality materials.
              </p>
            </div>
          </div>

          {/* --- Column 2: Large Image (Spans 2/4 cols) --- */}
          <div className="lg:col-span-2">
            <img 
              src={largeImage} 
              alt="Modern living room interior" 
              className="w-full h-full object-cover rounded-[32px] shadow-lg"
            />
          </div>

          {/* --- Column 3: Small Image & Right Text (Spans 1/4 cols) --- */}
          {/* Reduced gap from gap-6 to gap-4 for a tighter stack */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <img 
              src={smallImage} 
              alt="Elegant chair in a room" 
              className="w-full h-auto object-cover rounded-[32px] shadow-lg"
            />
            <div className="mt-2">
              <h3 className="text-3xl font-bold text-black">
                Our Philosophy
              </h3>
              <p className="text-base text-gray-700 mt-3">
                At Britto Charette, we believe in creating luxurious, personalized environments that reflect our clients' tastes and lifestyles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};