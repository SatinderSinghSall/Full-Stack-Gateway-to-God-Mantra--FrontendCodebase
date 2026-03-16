"use client";

import { AlertCircle, X } from "lucide-react";
import { Button } from "./button";

export default function ErrorAlert({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="relative flex items-center gap-4 p-4 rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-red-100/60 text-red-700 shadow-sm animate-in fade-in slide-in-from-top-2">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-100 text-red-600">
        <AlertCircle size={18} />
      </div>

      {/* Message */}
      <p className="flex-1 text-sm font-semibold leading-none">{message}</p>

      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="h-7 w-7 rounded-md text-red-500 hover:bg-red-200/40"
      >
        <X size={16} />
      </Button>
    </div>
  );
}
