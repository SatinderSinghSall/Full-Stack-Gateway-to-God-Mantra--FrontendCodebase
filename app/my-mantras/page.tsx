"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import Navbar from "@/components/Navbar";
import EditMantraButton from "@/components/EditMantraButton";
import DeleteButton from "@/components/DeleteButton";

import { Button } from "@/components/ui/button";

import { Plus, Sparkles, BookOpen } from "lucide-react";

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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMantras(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMantras();
  }, []);

  const openAddDialog = () => {
    document
      .querySelector("button.fixed")
      ?.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <Sparkles size={18} />
            <span className="font-medium">Your Spiritual Collection</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Mantras
          </h1>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Preserve your sacred chants, prayers, affirmations and reflections
            in one peaceful place.
          </p>

          <Button onClick={openAddDialog} className="mt-8 rounded-full px-8">
            <Plus size={18} className="mr-2" />
            Add Mantra
          </Button>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center py-24">
            <div className="animate-pulse text-orange-500">
              Loading your sacred collection...
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && mantras.length === 0 && (
          <div className="mt-16 bg-white rounded-3xl shadow-lg border p-12 text-center">
            <div className="text-6xl mb-6">🪔</div>

            <h2 className="text-3xl font-bold mb-3">
              Your Sacred Space Awaits
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Begin your spiritual journey by saving your first mantra, prayer,
              affirmation or personal reflection.
            </p>

            <Button
              size="lg"
              onClick={openAddDialog}
              className="rounded-full px-8"
            >
              <Plus className="mr-2" size={18} />
              Add First Mantra
            </Button>
          </div>
        )}

        {/* MANTRAS */}
        {!loading && mantras.length > 0 && (
          <div className="mt-12 space-y-6">
            {mantras.map((m) => (
              <div
                key={m._id}
                className="bg-white rounded-3xl shadow-lg border p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
                    <BookOpen size={18} className="text-orange-600" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{m.title}</h2>

                    <p className="text-xs text-muted-foreground">
                      Added on {new Date(m.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-orange-200 pl-4">
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {m.content}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <EditMantraButton mantra={m} refresh={fetchMantras} />

                  <DeleteButton mantraId={m._id} refresh={fetchMantras} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* QUOTE */}
        <div className="mt-12">
          <div className="bg-white rounded-3xl border shadow-sm p-8 text-center">
            <p className="text-lg italic text-gray-700">
              “Every mantra repeated with devotion becomes a bridge between the
              soul and inner peace.”
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
