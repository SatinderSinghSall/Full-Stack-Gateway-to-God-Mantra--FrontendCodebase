"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Mantra = {
  _id: string;
  title: string;
  content: string;
};

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  mantra: Mantra;
  refresh: () => void;
};

export default function EditMantraDialog({
  open,
  setOpen,
  mantra,
  refresh,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // 🔥 Sync data when modal opens
  useEffect(() => {
    if (mantra) {
      setTitle(mantra.title);
      setContent(mantra.content);
    }
  }, [mantra, open]);

  const handleUpdate = async (): Promise<void> => {
    if (!title.trim() || !content.trim()) return;

    const token = localStorage.getItem("token");

    setLoading(true);

    try {
      await API.put(
        `/mantras/${mantra._id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOpen(false);
      refresh(); // 🔥 refresh list
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
          <DialogTitle>Edit Mantra ✏️</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <Input
            placeholder="Mantra Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full min-h-[120px] rounded-md border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Write your mantra..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            onClick={handleUpdate}
            disabled={loading || !title.trim() || !content.trim()}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
