import React from 'react';
import { Store, UserCircle2, Bell, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { FeatureStep } from '../types';
import { useInView } from '../useInView';

const steps: FeatureStep[] = [
  {
    title: "Select Accounts",
    description: "Upload your target account list or select your target market.",
    icon: Store
  },
  {
    title: "Track Open Roles",
    description: "Select specific job titles, keywords, or identify your ideal customer profile.",
    icon: UserCircle2
  },
  {
    title: "Real-time Alerts",
    description: "Get alerts when new job postings & trends are identified.",
    icon: Bell
  },
  {
    title: "Strategic Insights",
    description: "Take action on hiring trends and the insights pulled directly from job descriptions.",
    icon: MessageSquareQuote
  }
];

export const Process: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`py-24 bg-slate-50 border-t border-slate-200 animate-fade-in-up on-scroll ${isInView ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-slate-900">How it works</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Foreshadow automates manual research, giving you instant hiring signals for smarter and faster outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrows for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 z-10 text-gray-300 transform translate-x-1/2">
                   <ArrowRight className="w-6 h-6 text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};