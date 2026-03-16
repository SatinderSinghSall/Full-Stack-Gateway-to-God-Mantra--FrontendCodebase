"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function RamaMantra() {
  const [count, setCount] = useState(0);

  function chant() {
    setCount(count + 1);
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-xl mx-auto text-center py-16 space-y-8">
        <h1 className="text-3xl font-bold">Rama Mantra</h1>

        <img src="/rama.jpg" className="mx-auto rounded-xl" />

        <h2 className="text-2xl font-semibold text-orange-600">
          श्री राम जय राम जय जय राम
        </h2>

        <p className="text-gray-600">
          Glory to Lord Rama, embodiment of dharma and righteousness.
        </p>

        <div className="space-y-3">
          <p className="text-xl">Chant Count: {count}</p>

          <Button onClick={chant}>Chant +1</Button>
        </div>
      </div>
    </div>
  );
}
