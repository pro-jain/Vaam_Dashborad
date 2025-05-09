"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  User, 
  Wallet, 
  CreditCard,
} from "lucide-react"
import { ModeToggle } from "./global/ModeToggle"

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
    color: "text-sky-500"
  },
  {
    label: 'My Account',
    icon: User,
    href: '/account',
    color: "text-violet-500",
  },
  {
    label: 'Earnings',
    icon: Wallet,
    href: '/earnings',
    color: "text-pink-700",
  },
  {
    label: 'Subscription',
    icon: CreditCard,
    href: '/subscription',
    color: "text-orange-700",
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="flex text-2xl font-bold">
            DriveHub 
          </h1>
        </Link>
        
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-[#ffd342] hover:text-black rounded-lg transition",
                pathname === route.href ? "bg-[#ffd342] text-black" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        
        
      </div>
    </div>
  )
}