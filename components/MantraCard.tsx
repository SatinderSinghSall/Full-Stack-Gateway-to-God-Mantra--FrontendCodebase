"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Sparkles, Sun } from "lucide-react";

type MantraCardProps = {
  title: string;
  description: string;
  link?: string;
  icon: "hanuman" | "lotus" | "flame";
  comingSoon?: boolean;
  onComingSoon?: () => void;
};

export default function MantraCard({
  title,
  description,
  link,
  icon,
  comingSoon,
  onComingSoon,
}: MantraCardProps) {
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
          <Button asChild className="w-full mt-3 rounded-full cursor-pointer">
            <Link href={link!}>Open</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
