import React from 'react';
import { Button } from './Button';
import { ArrowRight, Search, Building2, Briefcase, TrendingUp, Plus, Play, Sparkles, Clock, ChevronRight, Home, Settings, Lightbulb, MapPin, CheckCircle2, Mail } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-secondary/20 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Early Access Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-black text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Early access is opening soon
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-black tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
          <span className="text-[#1459b4]">Job signals</span> that book meetings and close deals faster.
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto mb-10 leading-snug">
          Analyze open job postings at your ICP accounts in real time, uncovering why companies are hiring, what they're funding, and the tech stacks they use.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 group" onClick={onOpenWaitlist}>
            Join the Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* VISUALIZATION CONTAINER */}
        <div className="relative max-w-5xl mx-auto mt-8 flex justify-center items-center">

           {/* 1. MAIN DASHBOARD (Scaled Down & Background) */}
           <div className="relative w-full max-w-3xl transform translate-x-0 sm:-translate-x-4 lg:-translate-x-12 transition-all duration-500 hover:scale-[1.01] hover:z-10 z-0">
               {/* Subtle glow behind mockup */}
               <div className="absolute -inset-8 bg-gradient-to-b from-primary/10 via-secondary/20 to-transparent rounded-[2rem] blur-3xl opacity-60 pointer-events-none"></div>
               {/* Dashboard Glow */}
               <div className="absolute -inset-4 bg-gray-200 rounded-[2rem] blur-2xl opacity-50"></div>

               {/* Browser-style frame */}
               <div className="relative rounded-t-xl overflow-hidden border border-slate-200 border-b-0 bg-slate-100/80 shadow-2xl">
                 {/* Browser chrome - address bar */}
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-white">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="flex-1 mx-4 py-1.5 px-4 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium">
                     app.foreshadow.io/dashboard
                   </div>
                 </div>

               <div className="relative rounded-b-xl bg-white ring-1 ring-slate-200 ring-t-0 shadow-2xl overflow-hidden text-left flex h-[460px]">

                  {/* Sidebar */}
                  <div className="w-16 sm:w-48 border-r border-gray-100 flex flex-col bg-white shrink-0">
                      <div className="h-14 border-b border-gray-100 flex items-center px-4 sm:px-6">
                         <img
                           src="/logo.png"
                           alt="Foreshadow"
                           className="h-[7.5rem] sm:h-36 w-auto object-contain -my-5"
                           decoding="async"
                         />
                      </div>
                      <div className="p-3 space-y-1">
                          <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm font-medium">
                             <Home className="w-4 h-4" /> <span className="hidden sm:inline">Home</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs sm:text-sm font-medium">
                             <Search className="w-4 h-4" /> <span className="hidden sm:inline">Searches</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs sm:text-sm font-medium">
                             <Building2 className="w-4 h-4" /> <span className="hidden sm:inline">Accounts</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs sm:text-sm font-medium">
                             <Lightbulb className="w-4 h-4" /> <span className="hidden sm:inline">Insights</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs sm:text-sm font-medium">
                             <Settings className="w-4 h-4" /> <span className="hidden sm:inline">Settings</span>
                          </div>
                      </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 bg-gray-50/50 flex flex-col min-w-0">
                     {/* Header */}
                     <div className="h-14 border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0">
                        <span className="font-bold text-gray-900 text-sm">Dashboard</span>
                        <div className="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">MA</div>
                     </div>

                     {/* Scrollable Area */}
                     <div className="p-6 overflow-hidden">
                        <div className="mb-6">
                           <h2 className="text-xl font-bold text-gray-900">Welcome back</h2>
                        </div>

                        {/* Stats Grid - Large Numbers */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Searches</span>
                              <div className="text-4xl font-bold text-gray-900 mt-1">12</div>
                           </div>
                           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Accounts</span>
                              <div className="text-4xl font-bold text-gray-900 mt-1">137</div>
                           </div>
                           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Jobs Found</span>
                              <div className="text-4xl font-bold text-gray-900 mt-1">210</div>
                           </div>
                           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">This Week</span>
                              <div className="text-4xl font-bold text-green-600 mt-1">+45</div>
                           </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-2 mb-6 overflow-hidden whitespace-nowrap mask-linear">
                           <div className="px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-medium flex items-center gap-1">
                              <Plus className="w-3 h-3" /> Create Search
                           </div>
                           <div className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium flex items-center gap-1">
                              <Play className="w-3 h-3" /> Run All
                           </div>
                           <div className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> Insights
                           </div>
                        </div>

                        {/* Recent Activity List - Faded at bottom */}
                        <div className="bg-white rounded-lg border border-gray-200 p-4 relative">
                            <h3 className="text-xs font-bold text-gray-900 mb-3 flex items-center gap-1">
                               <Clock className="w-3 h-3" /> Recent Activity
                            </h3>
                            <div className="space-y-3 opacity-90">
                               <div className="flex gap-3 items-center">
                                  <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center shrink-0">
                                     <Briefcase className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <div className="min-w-0">
                                     <div className="text-xs font-medium text-gray-900">New job posted at Acme Corp</div>
                                     <div className="text-[10px] text-gray-500">VP of HR · 2 min ago</div>
                                  </div>
                               </div>
                               <div className="flex gap-3 items-center">
                                  <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center shrink-0">
                                     <TrendingUp className="w-4 h-4 text-green-600" />
                                  </div>
                                  <div className="min-w-0">
                                     <div className="text-xs font-medium text-gray-900">Hiring trend identified</div>
                                     <div className="text-[10px] text-gray-500">TechCorp · 15 min ago</div>
                                  </div>
                               </div>
                               <div className="flex gap-3 items-center">
                                  <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center shrink-0">
                                     <Building2 className="w-4 h-4 text-amber-600" />
                                  </div>
                                  <div className="min-w-0">
                                     <div className="text-xs font-medium text-gray-900">5 new roles at GlobalSoft</div>
                                     <div className="text-[10px] text-gray-500">Engineering team · 1 hr ago</div>
                                  </div>
                               </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                     </div>
                  </div>
               </div>
               </div>
           </div>

           {/* 2. OVERLAPPING POP-OUT CARD (Job Description) */}
           <div className="absolute right-0 top-16 md:right-4 md:top-24 lg:-right-4 w-72 sm:w-80 md:w-96 perspective-1000 z-20 animate-fade-in-up delay-300">
              <div className="relative bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 p-5 sm:p-6 transform transition-transform hover:-translate-y-1 hover:scale-105 duration-300">

                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">VP of Human Resources</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                           <Building2 className="w-3 h-3" /> Acme Corp
                           <span className="mx-1">&bull;</span>
                           <MapPin className="w-3 h-3" /> New York, NY
                        </div>
                     </div>
                     <div className="bg-green-100 text-green-700 p-1.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4" />
                     </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 my-4"></div>

                  {/* Body Content with Highlight */}
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-sans">
                     <p>
                        We are looking for an experienced leader to oversee our people operations.
                     </p>

                     <div className="relative">
                        {/* Highlight Effect */}
                        <div className="relative bg-[#1459b4]/10 rounded-lg p-2 -mx-2 border-l-4 border-[#1459b4]">
                           <span className="text-gray-900 font-medium">
                              "We are hiring a VP of HR to come in and scale our hiring process. We have a goal to double headcount in the next 12 months and this person will lead the charge."
                           </span>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -right-2 -top-3 bg-[#1459b4] text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg font-bold flex items-center gap-1">
                           <Sparkles className="w-2 h-2" /> Strategic Insight
                        </div>
                     </div>

                     <p className="opacity-70">
                        You will report directly to the CEO and work closely with department heads to ensure...
                     </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 flex justify-end">
                     <button className="text-xs font-bold text-[#1459b4] flex items-center gap-1 hover:underline">
                        View Full Analysis <ArrowRight className="w-3 h-3" />
                     </button>
                  </div>

              </div>
           </div>

           {/* 3. OUTREACH MESSAGE BUBBLE */}
           <div className="absolute left-0 -bottom-16 md:left-2 md:-bottom-12 w-56 sm:w-64 md:w-72 z-30 animate-fade-in-up delay-400">
              <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 p-4 sm:p-5 transform transition-transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                       <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                       <div className="text-xs font-bold text-gray-900">Outreach to Acme Corp</div>
                    </div>
                 </div>
                 <div className="text-xs text-gray-600 leading-relaxed border-l-2 border-primary/30 pl-3 py-1">
                    <p className="font-medium text-gray-900 mb-1">Hi Sarah,</p>
                    <p>
                      I noticed Acme is scaling your HR team with a VP of HR role, and your goal to double headcount in 12 months. I'd love to connect and share how we've helped similar companies...
                    </p>
                 </div>
                 <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-primary">
                    <CheckCircle2 className="w-3 h-3" /> Message ready to send
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};
