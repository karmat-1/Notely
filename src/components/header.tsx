import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { getUser } from "@/auth/server";
import { shadow } from "@/styles/utils";
import { Button } from './ui/button';
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";

async function Header() {
  const user = await getUser();
  return (
    <header
    className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}>
      <Link href="/" >
      <Image
          src ="/android-chrome-192x192.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />
        
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
        Notely
        </h1>
        </Link>

        <div className="flex gap-4">
          {user ? (
           <LogOutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
        </div>
    </header>
  );
};

export default Header