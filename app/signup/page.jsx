"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

import LoadingSpinner from "@/components/ui/loading-spinner";
import ScreenLoader from "@/components/ui/screen-loader";
import ErrorAlert from "@/components/ui/error-alert";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (!validate()) return;

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
        <div className="absolute w-[500px] h-[500px] bg-orange-200/40 blur-3xl rounded-full"></div>

        <Card className="relative w-full max-w-md border bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
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

            <form onSubmit={handleSignup} className="space-y-5">
              {/* NAME */}
              <div className="space-y-1">
                <Label>Name</Label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <Input
                    className={`pl-10 h-11 rounded-lg ${
                      errors.name
                        ? "border-red-500 focus-visible:ring-red-400"
                        : "focus-visible:ring-orange-400"
                    }`}
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-1">
                <Label>Email</Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <Input
                    type="email"
                    className={`pl-10 h-11 rounded-lg ${
                      errors.email
                        ? "border-red-500 focus-visible:ring-red-400"
                        : "focus-visible:ring-orange-400"
                    }`}
                    placeholder="you@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="space-y-1">
                <Label>Password</Label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <Input
                    type={showPassword ? "text" : "password"}
                    className={`pl-10 pr-10 h-11 rounded-lg ${
                      errors.password
                        ? "border-red-500 focus-visible:ring-red-400"
                        : "focus-visible:ring-orange-400"
                    }`}
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* BUTTON */}
              <Button
                className="w-full h-11 rounded-full flex items-center justify-center gap-2 text-base bg-black hover:bg-gray-900 transition"
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
