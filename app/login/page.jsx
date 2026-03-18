"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import LoadingSpinner from "@/components/ui/loading-spinner";
import ScreenLoader from "@/components/ui/screen-loader";
import ErrorAlert from "../../components/ui/error-alert";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      router.push("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <ScreenLoader />}

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50 px-4">
        {/* 🌅 Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-orange-200/40 blur-3xl rounded-full"></div>

        <Card className="relative w-full max-w-md border bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Continue your spiritual journey
              </p>
            </div>

            <ErrorAlert message={error} onClose={() => setError("")} />

            <form onSubmit={handleLogin} className="space-y-5">
              {/* EMAIL */}
              <div className="space-y-2">
                <Label>Email</Label>

                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <Input
                    type="email"
                    className="pl-10 h-11 rounded-lg focus-visible:ring-orange-400"
                    placeholder="you@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <Label>Password</Label>

                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 h-11 rounded-lg focus-visible:ring-orange-400"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* 👁 Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <Button
                className="w-full h-11 rounded-full flex items-center justify-center gap-2 text-base bg-black hover:bg-gray-900 transition"
                disabled={loading}
              >
                {loading && <LoadingSpinner />}
                Login
              </Button>
            </form>

            {/* SIGNUP */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-orange-600 hover:underline"
              >
                Signup
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
