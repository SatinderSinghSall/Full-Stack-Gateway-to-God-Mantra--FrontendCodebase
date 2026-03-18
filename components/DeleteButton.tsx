"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DeleteMantraDialog from "./DeleteMantraDialog";

type Props = {
  mantraId: string;
  refresh: () => void;
};

export default function DeleteButton({ mantraId, refresh }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete
      </Button>

      <DeleteMantraDialog
        open={open}
        setOpen={setOpen}
        mantraId={mantraId}
        refresh={refresh}
      />
    </>
  );
}
