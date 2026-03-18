"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditMantraDialog from "./EditMantraDialog";

export default function EditMantraButton({ mantra, refresh }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Edit
      </Button>

      <EditMantraDialog
        open={open}
        setOpen={setOpen}
        mantra={mantra}
        refresh={refresh}
      />
    </>
  );
}
