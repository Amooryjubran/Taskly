"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function AuthActions() {
  const { user } = useUser();
  const pathname = usePathname();
  const displayName =
    user?.firstName || user?.primaryEmailAddress?.emailAddress || "there";
  const isDashboardPage = pathname.startsWith("/dashboard");
  return (
    <>
      <SignedIn>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline text-sm text-gray-600">
            Welcome, {displayName}
          </span>

          {!isDashboardPage && (
            <Link href="/dashboard" className="inline-flex">
              <Button size="sm" className="text-xs sm:text-sm cursor-pointer">
                Go to dashboard
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          )}
          <UserButton
            afterSignOutUrl="/"
            appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }}
          />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="sm" className="text-xs sm:text-sm">
              Sign up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Taskly Logo"
            priority
            className="h-5 w-auto object-contain"
          />
        </Link>
        <AuthActions />
      </div>
    </header>
  );
}
