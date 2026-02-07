import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Benefits } from './components/Benefits';
import { FooterCTA } from './components/FooterCTA';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle page texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <Navbar onOpenWaitlist={openModal} />
      <main>
        <Hero onOpenWaitlist={openModal} />
        <Process />
        <Benefits />
      </main>
      <FooterCTA onOpenWaitlist={openModal} />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
