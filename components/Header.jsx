import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={"/"}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    LS
                  </span>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  ListenSpace
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium">
                How It Works
              </Link>
              <Link
                href="#listeners"
                className="text-gray-600 hover:text-gray-900 font-medium">
                Our Listeners
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </Link>
              <Button
                variant={"outline"}
                className={
                  "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:text-white px-6 py-2 font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                }>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
