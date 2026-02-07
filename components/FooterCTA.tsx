import React from 'react';
import { Button } from './Button';
import { useInView } from '../useInView';

interface FooterCTAProps {
  onOpenWaitlist: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenWaitlist }) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <footer
      ref={ref}
      className={`bg-slate-700 py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden animate-fade-in-up on-scroll ${isInView ? 'is-visible' : ''}`}
    >
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tight">
          Get beta access.
        </h2>

        <div className="flex justify-center">
          <Button variant="dark" size="lg" className="shadow-2xl shadow-black/20 text-slate-900 font-bold px-10 py-4 text-lg" onClick={onOpenWaitlist}>
            Join the Waitlist
          </Button>
        </div>

        <p className="mt-12 text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Foreshadow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
