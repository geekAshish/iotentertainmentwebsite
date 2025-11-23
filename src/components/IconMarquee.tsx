import { AngledMarquee } from '@/components/AngledMarquee';
import { Star, Code, PenTool } from 'lucide-react'; // npm install lucide-react

const MarqueeItem = ({ icon: Icon, text }: any) => (
  <div className="flex items-center mx-6 bg-slate-800 p-3 px-6 rounded-full border border-slate-700">
    <Icon className="h-6 w-6 text-cyan-400 mr-3" />
    <span className="text-xl font-medium text-white">{text}</span>
  </div>
);

export function TechMarquee() {
  return (
    <div className="py-24 bg-slate-900">
      <AngledMarquee angle={-2} speed="normal">
        <MarqueeItem icon={PenTool} text="UI/UX Design" />
        <MarqueeItem icon={Code} text="Web Development" />
        <MarqueeItem icon={Star} text="Branding" />
        <MarqueeItem icon={PenTool} text="Motion Graphics" />
        <MarqueeItem icon={Code} text="React & Next.js" />
        <MarqueeItem icon={Star} text="Digital Strategy" />
      </AngledMarquee>
    </div>
  );
}