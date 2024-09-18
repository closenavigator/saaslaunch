"use client"
import Link from 'next/link';
import * as React from "react";
import { SearchIcon, Sparkles, ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { UserProfile } from "../user-profile";
import ModeToggle from "../mode-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@clerk/nextjs";
import BuildSalesTeamsLogo from "../BuildSalesTeamsLogo";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "cmdk";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const searchRef = useRef<HTMLDivElement>(null);

    const toggleSearch = () => setOpen(!open);

    const { isSignedIn } = useAuth();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prevOpen) => !prevOpen);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const NavItems = () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 h-8 w-full justify-start px-2">
                    <span className="text-sm font-medium text-muted-foreground">More</span>
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/payments">Payments</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/customers">Customers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/reports">Reports</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/help">Help Center</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );

    return (
        <>
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm border rounded-full shadow-lg">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        <div className="flex items-center">
                            <BuildSalesTeamsLogo className="mr-4" />
                            <div className="hidden md:flex items-center space-x-4">
                                <NavItems />
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex items-center space-x-2"
                                onClick={toggleSearch}
                            >
                                <SearchIcon className="h-4 w-4" />
                                <span className="hidden sm:inline text-sm">Search</span>
                                <kbd className="hidden sm:inline ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </Button>
                            <ModeToggle />
                            {isSignedIn && <UserProfile />}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="md:hidden">
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                                    <nav className="flex flex-col space-y-4 mt-4">
                                        <NavItems />
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50"
                    >
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
                        <div 
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg p-4"
                            ref={searchRef}
                        >
                            <Command className="rounded-lg border shadow-md bg-popover">
                                <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                                    <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                    <input
                                        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Type a command or search..."
                                    />
                                </div>
                                <ul className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                                    <li className="px-2 py-3 text-sm text-muted-foreground">No results found.</li>
                                </ul>
                            </Command>
                            <p className="text-xs text-muted-foreground mt-2 text-center">
                                <Sparkles className="mr-1 h-4 w-4 inline-block" />
                                Pro tip: Press <kbd className="rounded border bg-muted px-1 text-xs">⌘</kbd> + <kbd className="rounded border bg-muted px-1 text-xs">K</kbd> to open this search box anywhere
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

