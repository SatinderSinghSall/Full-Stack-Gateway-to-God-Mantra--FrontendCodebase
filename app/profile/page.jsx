"use client";

import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScreenLoader from "@/components/ui/screen-loader";

import { User, Mail, LogOut, BookOpen, Flame, Sparkles } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
export default function Profile() {
  const router = useRouter();

  const { user, logout } = useAuth();

  if (!user) {
    return <ScreenLoader />;
  }

  const firstLetter = user?.name?.charAt(0)?.toUpperCase();

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <Navbar />

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="h-56 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300">
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="-mt-24">
            <Card className="w-full overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8">
                  {/* Avatar */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center text-5xl font-bold shadow-xl border-4 border-white">
                    {firstLetter}
                  </div>

                  {/* User Info */}
                  <div className="text-center lg:text-left flex-1 min-w-0">
                    <h1 className="text-3xl md:text-4xl font-bold">
                      {user.name}
                    </h1>

                    <p className="text-muted-foreground mt-2">{user.email}</p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-700 text-sm font-medium">
                      <Sparkles size={16} />
                      Spiritual Seeker
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                    <Button
                      className="rounded-full"
                      onClick={() => router.push("/my-mantras")}
                    >
                      <BookOpen className="mr-2" size={18} />
                      My Mantras
                    </Button>

                    <Button variant="outline" disabled className="rounded-full">
                      Daily Practice
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" className="rounded-full">
                          <LogOut className="mr-2" size={18} />
                          Logout
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Logout</DialogTitle>

                          <DialogDescription>
                            Are you sure you want to logout from your spiritual
                            account?
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>

                          <DialogClose asChild>
                            <Button
                              variant="destructive"
                              onClick={handleLogout}
                            >
                              Logout
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <Flame className="mx-auto mb-3 text-orange-500" />
              <h3 className="text-3xl font-bold">0</h3>
              <p className="text-sm text-muted-foreground">Total Chants</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <BookOpen className="mx-auto mb-3 text-orange-500" />
              <h3 className="text-3xl font-bold">0</h3>
              <p className="text-sm text-muted-foreground">Saved Mantras</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto mb-3 text-orange-500" />
              <h3 className="text-3xl font-bold">0</h3>
              <p className="text-sm text-muted-foreground">Streak Days</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <User className="mx-auto mb-3 text-orange-500" />
              <h3 className="text-lg font-bold">Devotee</h3>
              <p className="text-sm text-muted-foreground">Spiritual Level</p>
            </CardContent>
          </Card>
        </div>

        {/* DETAILS */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium text-lg">{user.name}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p className="font-medium text-lg">{user.email}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Account Status
                  </p>
                  <p className="font-medium text-green-600">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-6">Spiritual Journey</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                  <p className="font-medium text-lg">Spiritual Seeker</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Mantras Saved
                  </p>
                  <p className="font-medium text-lg">0</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Practice Streak
                  </p>
                  <p className="font-medium text-lg">0 Days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* QUOTE */}
        <div className="mt-10">
          <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-r from-orange-500 to-amber-400 text-white">
            <CardContent className="p-8 text-center">
              <p className="text-lg italic">
                "Every mantra you chant brings you one step closer to inner
                peace and divine connection."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
