"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { User, Mail, Lock } from "lucide-react";

import LoadingSpinner from "@/components/ui/loading-spinner";
import ScreenLoader from "@/components/ui/screen-loader";
import ErrorAlert from "@/components/ui/error-alert";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await API.post("/auth/signup", { name, email, password });
      router.push("/login");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Signup failed. Please try again.",
      );
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
                Create Account
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Begin your spiritual journey
              </p>
            </div>

            <ErrorAlert message={error} onClose={() => setError("")} />

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <Input
                    className="pl-10"
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

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
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-orange-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
