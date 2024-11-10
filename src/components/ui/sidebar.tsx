import { Home, Settings, Users, Package } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const menuItems = [
  { icon: Home, label: "대시보드", href: "/admin" },
  { icon: Users, label: "사용자 관리", href: "/admin/users" },
  { icon: Package, label: "상품 관리", href: "/admin/products" },
  { icon: Settings, label: "설정", href: "/admin/settings" },
]

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("w-72 p-4", className)} {...props}>
      <div className="mb-8 px-2">
        <h2 className="text-lg font-semibold">관리자 페이지</h2>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === item.href
                ? "bg-secondary text-secondary-foreground"
                : "hover:bg-secondary/50"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}