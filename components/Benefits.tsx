import React from 'react';
import { TrendingUp, Mail, Zap, Briefcase } from 'lucide-react';
import { BenefitItem } from '../types';
import { useInView } from '../useInView';

const benefits: BenefitItem[] = [
  {
    title: "Predict Strategic Shifts",
    description: "Identify growth plans, new departments, and upcoming initiatives before they're announced.",
    icon: TrendingUp
  },
  {
    title: "Smarter Outreach",
    description: "Personalize your messaging with context pulled straight from job descriptions.",
    icon: Mail
  },
  {
    title: "Stay Ahead of Competitors",
    description: "We'll alert you of key insights on your accounts so you can be the first to know.",
    icon: Zap
  },
  {
    title: "Enrich Account Plans",
    description: "Keep account plans updated with real data so you know what’s happening inside each account and why you can win.",
    icon: Briefcase
  }
];

export const Benefits: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`py-24 bg-white animate-fade-in-up on-scroll ${isInView ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Benefits</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-heading font-bold text-slate-900">Outcomes that matter.</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We automate the busywork so you can focus on pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary">
                  <benefit.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};