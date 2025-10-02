import { cn } from "@/lib/utils"

const stats = [
  { value: "150+", label: "Years Combined Experience" },
  { value: "25+", label: "Professional Certifications" },
  { value: "12+", label: "Industry Awards" },
  { value: "100%", label: "Client-Focused Approach" },
]

export function TeamStats({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-primary">{s.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
