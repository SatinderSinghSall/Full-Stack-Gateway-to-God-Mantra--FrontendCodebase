"use client";

import Navbar from "@/components/Navbar";
import MantraCard from "@/components/MantraCard";
import { Flame } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-orange-100/40">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HERO */}
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-orange-200/40 blur-3xl rounded-full -z-10"></div>

          <div className="flex items-center justify-center gap-2 text-orange-500 mb-4">
            <Flame size={20} />
            <span className="text-sm font-semibold tracking-wide">
              Spiritual Library
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Gateway to God
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Discover sacred Hindu mantras, explore their meanings, and deepen
            your spiritual journey through timeless chants.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <MantraCard
            title="Hanuman Chalisa"
            description="Read the sacred 40 verses praising Lord Hanuman."
            link="/hanuman-chalisa"
            icon="hanuman"
          />

          <MantraCard
            title="Lalita Sahasranama"
            description="Explore the thousand divine names of Goddess Lalita."
            icon="lotus"
            comingSoon
            onComingSoon={() => setComingSoonOpen(true)}
          />

          <MantraCard
            title="Rama Mantra"
            description="Chant the powerful mantra of Lord Rama."
            icon="flame"
            comingSoon
            onComingSoon={() => setComingSoonOpen(true)}
          />
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">Coming Soon</DialogTitle>
            <DialogDescription className="mt-3 text-base">
              This sacred chant will be available very soon. Stay tuned as we
              continue expanding the spiritual library.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 text-orange-500 text-3xl">🪔</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
