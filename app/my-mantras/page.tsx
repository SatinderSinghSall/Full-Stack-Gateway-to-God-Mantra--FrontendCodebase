"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import Navbar from "@/components/Navbar";
import EditMantraButton from "@/components/EditMantraButton";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Plus } from "lucide-react";

type Mantra = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function MyMantras() {
  const [mantras, setMantras] = useState<Mantra[]>([]);
  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchMantras = async () => {
    try {
      const res = await API.get("/mantras", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMantras(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMantras();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <Navbar />

      {/* 🔥 HERO */}
      <div className="text-center pt-16 pb-10 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-orange-200/40 blur-3xl rounded-full -z-10"></div>

        <div className="flex items-center justify-center gap-2 text-orange-500 mb-3">
          <Sparkles size={18} />
          <span className="text-sm font-semibold tracking-wide">
            Your Spiritual Collection
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">🪔 My Mantras</h1>

        <p className="text-muted-foreground mt-3">
          Preserve your personal chants & spiritual notes
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* 🔄 LOADING */}
        {loading && (
          <div className="text-center text-muted-foreground animate-pulse">
            Loading your mantras...
          </div>
        )}

        {/* 🌟 EMPTY STATE */}
        {!loading && mantras.length === 0 && (
          <div className="text-center mt-20">
            <div className="text-5xl mb-4">🪔</div>

            <h2 className="text-xl font-semibold mb-2">No mantras yet</h2>

            <p className="text-muted-foreground mb-6">
              Start your spiritual journey by adding your first mantra
            </p>

            <Button
              onClick={() =>
                document
                  .querySelector("button.fixed")
                  ?.dispatchEvent(new MouseEvent("click"))
              }
              className="rounded-full px-6 flex items-center gap-2 mx-auto"
            >
              <Plus size={16} />
              Add Mantra
            </Button>
          </div>
        )}

        {/* 📜 MANTRA LIST */}
        <div className="space-y-6">
          {mantras.map((m) => (
            <div
              key={m._id}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-md border hover:shadow-xl transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-orange-200/30 rounded-2xl"></div>

              <div className="relative">
                {/* TITLE */}
                <h2 className="text-lg font-semibold tracking-tight">
                  {m.title}
                </h2>

                {/* CONTENT */}
                <p className="text-gray-700 mt-3 whitespace-pre-line leading-relaxed">
                  {m.content}
                </p>

                {/* DATE */}
                <p className="text-xs text-muted-foreground mt-4">
                  {new Date(m.createdAt).toLocaleString()}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-5">
                  <EditMantraButton mantra={m} refresh={fetchMantras} />
                  <DeleteButton mantraId={m._id} refresh={fetchMantras} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
