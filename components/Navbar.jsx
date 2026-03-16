"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Flame, LogOut, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-100 text-orange-600">
            <Flame size={20} />
          </div>

          <span className="font-semibold tracking-tight text-lg sm:text-xl lg:text-2xl">
            Gateway
            <span className="hidden sm:inline"> to God</span>
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {!loggedIn && (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="rounded-full px-3 sm:px-5 text-sm sm:text-base"
                >
                  Login
                </Button>
              </Link>

              <Link href="/signup">
                <Button className="rounded-full px-4 sm:px-6 text-sm sm:text-base">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          {loggedIn && (
            <>
              <Link href="/profile">
                <Button
                  variant="ghost"
                  className="rounded-full flex items-center gap-2 px-3 sm:px-5 text-sm sm:text-base"
                >
                  <User size={16} />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </Link>

              {/* Logout Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 px-3 sm:px-5 text-sm sm:text-base"
                  >
                    <LogOut size={16} />
                    <span className="hidden sm:inline">Logout</span>
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Confirm Logout</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to logout from your spiritual
                      account?
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter className="flex gap-2 mt-4">
                    <Button variant="ghost">Cancel</Button>

                    <Button
                      variant="destructive"
                      onClick={logout}
                      className="rounded-full"
                    >
                      Logout
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
