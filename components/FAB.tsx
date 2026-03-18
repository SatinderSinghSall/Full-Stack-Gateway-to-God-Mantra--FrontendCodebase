"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AddMantraDialog from "./AddMantraDialog";

export default function FAB() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
      >
        <Plus />
      </button>

      {/* Dialog */}
      <AddMantraDialog open={open} setOpen={setOpen} />
    </>
  );
}
