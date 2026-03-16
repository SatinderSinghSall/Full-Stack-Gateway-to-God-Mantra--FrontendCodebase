"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Sparkles, Sun } from "lucide-react";

export default function MantraCard({
  title,
  description,
  link,
  icon,
  comingSoon,
  onComingSoon,
}) {
  const icons = {
    hanuman: Sparkles,
    lotus: Sun,
    flame: Flame,
  };

  const Icon = icons[icon] || Sparkles;

  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-lg shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-100/40 via-yellow-100/30 to-orange-200/30"></div>

      <CardContent className="relative p-8 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-orange-500">
          <Icon size={18} />
          <span className="text-sm font-medium tracking-wide">
            Sacred Chant
          </span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

        <p className="text-muted-foreground text-sm">{description}</p>

        {/* Button Logic */}
        {comingSoon ? (
          <Button onClick={onComingSoon} className="w-full mt-3 rounded-full">
            Open
          </Button>
        ) : (
          <Link href={link} className="w-full">
            <Button className="w-full mt-3 rounded-full">Open</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
