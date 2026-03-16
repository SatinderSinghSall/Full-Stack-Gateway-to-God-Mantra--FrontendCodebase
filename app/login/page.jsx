"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Mail, Lock } from "lucide-react";

import LoadingSpinner from "@/components/ui/loading-spinner";
import ScreenLoader from "@/components/ui/screen-loader";
import ErrorAlert from "../../components/ui/error-alert";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Card className="w-full max-w-md border bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Continue your spiritual journey
              </p>
            </div>

            <ErrorAlert message={error} onClose={() => setError("")} />

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <Input
                    type="email"
                    className="pl-10"
                    placeholder="you@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <Input
                    type="password"
                    className="pl-10"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <Button
                className="w-full rounded-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading && <LoadingSpinner />}
                Login
              </Button>
            </form>

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
