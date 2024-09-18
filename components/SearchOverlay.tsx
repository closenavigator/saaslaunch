"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command } from "cmdk"
import { SearchIcon, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { UserProfile } from "@/components/user-profile"
import ModeToggle from "@/components/mode-toggle"
import BuildSalesTeamsLogo from "@/components/BuildSalesTeamsLogo"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { useAuth } from "@clerk/nextjs"
import config from "@/config"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Marketing Page",
    href: "/marketing-page",
    description: "Write some wavy here to get them to click.",
  },
  // Add more components as needed
];

export default function SearchOverlay() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const searchRef = useRef(null)

  const toggleSearch = () => setOpen(!open)

  let userId = null;
  if (config?.auth?.enabled) {
    const user = useAuth();
    userId = user?.userId;
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prevOpen) => !prevOpen)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      <nav className="border-b bg-white dark:bg-black dark:bg-opacity-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BuildSalesTeamsLogo className="h-8 w-8" />
              <span className="ml-2 text-lg font-semibold">BuildSalesTeams</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <li key={component.title}>
                          <NavigationMenuItem>
                            <Link href={component.href} legacyBehavior passHref>
                              <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{component.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{component.description}</p>
                              </a>
                            </Link>
                          </NavigationMenuItem>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <Button variant="ghost">Dashboard</Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="flex items-center space-x-2"
                onClick={toggleSearch}
              >
                <SearchIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:inline ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              <ModeToggle />
              {userId && <UserProfile />}
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
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm dark:from-black dark:via-black/70" />
            <div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg p-4 pointer-events-auto"
              ref={searchRef}
            >
              <Command className="rounded-lg border shadow-md bg-white dark:bg-black">
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
  )
}