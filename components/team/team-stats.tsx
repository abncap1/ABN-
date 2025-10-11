import { cn } from "@/lib/utils"

const stats = [
  { value: "40+", label: "Years Combined Experience" },
  { value: "10+", label: "Professional Qualifications" },
  { value: "100%", label: "Client-Focused Approach" },
]

export function TeamStats({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-6", className)}>
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-primary">{s.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
