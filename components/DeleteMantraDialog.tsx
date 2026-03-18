"use client";

import API from "@/lib/api";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  mantraId: string;
  refresh: () => void;
};

export default function DeleteMantraDialog({
  open,
  setOpen,
  mantraId,
  refresh,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    setLoading(true);

    try {
      await API.delete(`/mantras/${mantraId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOpen(false);
      refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Mantra</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this mantra? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
