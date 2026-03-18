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
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState(null);
  const route = useRouter();

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
    route.push("/");
    // location.reload();
  }

  const firstLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <Navbar />

      {/* 🌅 HERO HEADER */}
      <div className="relative h-40 bg-gradient-to-r from-orange-200 via-orange-100 to-white">
        <div className="absolute inset-0 bg-orange-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-16 pb-16">
        {/* 👤 PROFILE CARD */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center md:items-end gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl font-bold shadow-md border-4 border-white">
            {firstLetter}
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>

          {/* Actions */}
          <div className="ml-auto flex gap-3">
            <Button variant="outline" disabled className="rounded-full px-5">
              Edit Profile
            </Button>

            <Button
              className="rounded-full"
              onClick={() => route.push("/my-mantras")}
            >
              View My Mantras
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full px-5" variant="destructive">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Logout</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to logout?
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

        {/* 📊 STATS (Future-ready but looks premium) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <Card className="bg-white/70 backdrop-blur shadow-sm text-center">
            <CardContent className="p-5">
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Chants Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur shadow-sm text-center">
            <CardContent className="p-5">
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Favorites</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur shadow-sm text-center">
            <CardContent className="p-5">
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Streak (Days)</p>
            </CardContent>
          </Card>
        </div>

        {/* 📋 DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-white/70 backdrop-blur shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <User className="text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 🙏 FOOTER */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          🙏 Keep your spiritual journey going 🙏
        </div>
      </div>
    </div>
  );
}
