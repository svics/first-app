import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, ShoppingBag, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"options" | "email" | "phone">("options");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  const handleSocialSignIn = (provider: string) => {
    // Placeholder for social auth
    navigate("/onboarding");
  };

  if (mode === "options") {
    return (
      <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col"
        >
          <div className="mb-10 flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <ShoppingBag className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Join our community</h1>
            <p className="mt-1 text-sm text-muted-foreground">Choose how you'd like to sign in</p>
          </div>

          <div className="space-y-3">
            {/* Google */}
            <Button
              variant="outline"
              onClick={() => handleSocialSignIn("google")}
              className="h-12 w-full rounded-xl border-border text-sm font-medium"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>

            {/* Facebook */}
            <Button
              variant="outline"
              onClick={() => handleSocialSignIn("facebook")}
              className="h-12 w-full rounded-xl border-border text-sm font-medium"
            >
              <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </Button>

            {/* Phone */}
            <Button
              variant="outline"
              onClick={() => setMode("phone")}
              className="h-12 w-full rounded-xl border-border text-sm font-medium"
            >
              <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
              Continue with Phone
            </Button>

            <div className="flex items-center gap-3 py-2">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Email */}
            <Button
              variant="outline"
              onClick={() => setMode("email")}
              className="h-12 w-full rounded-xl border-border text-sm font-medium"
            >
              <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
              Sign in with Email
            </Button>
          </div>

          <div className="mt-auto pt-6">
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (mode === "phone") {
    return (
      <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col"
        >
          <div className="mb-10 flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Phone Sign In</h1>
            <p className="mt-1 text-sm text-muted-foreground">We'll send you a verification code</p>
          </div>

          <form onSubmit={handleSignIn} className="flex flex-1 flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="mt-auto space-y-3">
              <Button type="submit" className="h-12 w-full rounded-xl text-base font-semibold">
                Send Code
              </Button>
              <button
                type="button"
                onClick={() => setMode("options")}
                className="w-full text-center text-sm font-medium text-primary"
              >
                Back to sign in options
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  // Email mode
  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 flex-col"
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
            <ShoppingBag className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in with your email</p>
        </div>

        <form onSubmit={handleSignIn} className="flex flex-1 flex-col gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button type="button" className="self-end text-sm font-medium text-primary">
            Forgot password?
          </button>

          <div className="mt-auto space-y-3">
            <Button type="submit" className="h-12 w-full rounded-xl text-base font-semibold">
              Sign In
            </Button>
            <button
              type="button"
              onClick={() => setMode("options")}
              className="w-full text-center text-sm font-medium text-primary"
            >
              Back to sign in options
            </button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignIn;
