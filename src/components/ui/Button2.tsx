import { ArrowRight } from 'lucide-react'; // Assuming you have lucide-react for icons

const ContactButton = () => {
  return (
    <button
      className="
        relative
        flex items-center justify-center
        py-2 px-5
        rounded-full
        bg-neutral-900
        text-white
        overflow-hidden
        group
        transition-all duration-300 ease-in-out
        shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75
        mt-3
      " 
    >
      {/* Dynamic Border Element */}
      <span
        className="
          absolute inset-0 
          rounded-full 
          border-1 border-white 
          group-hover:border-blue-300 
          group-hover:scale-105
          transition-all duration-300 ease-in-out
        "
      ></span>

      {/* Actual Content (Text + Icon) */}
      <span className="relative flex items-center gap-2 z-10"> {/* z-10 ensures text is above the border span */}
        Contact Us
        {/* Optional: Add an arrow icon like in some modern UIs if desired */}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};

export default ContactButton;