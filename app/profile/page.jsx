"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";
import Navbar from "@/components/Navbar";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { User, Mail, LogOut } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      const res = await API.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
    };

    fetchUser();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  const firstLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* PROFILE HEADER */}
        <div className="flex items-center gap-6 mb-12">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl font-bold shadow">
            {firstLetter}
          </div>

          <div>
            <h1 className="text-2xl font-semibold">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>
        </div>

        {/* PROFILE INFO GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Name */}
          <Card className="rounded-xl border bg-white/70 backdrop-blur shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <User className="text-orange-500" size={22} />

              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="rounded-xl border bg-white/70 backdrop-blur shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="text-orange-500" size={22} />

              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <Button variant="outline" disabled className="rounded-full px-6">
            Edit Profile (Coming Soon)
          </Button>

          {/* Logout Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full px-6" variant="destructive">
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogDescription>
                  Are you sure you want to logout from your spiritual account?
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button variant="outline">Cancel</Button>

                <Button variant="destructive" onClick={logout}>
                  Logout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
