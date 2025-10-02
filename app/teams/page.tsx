/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge"
import { TeamCard } from "@/components/team/team-card"
import { TeamStats } from "@/components/team/team-stats"
import { teamMembers } from "@/components/team/team-data"

export default function TeamsPage() {
  return (
    <main>
      <header className="bg-muted/40 pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center"> 
          <h1 className="text-3xl md:text-5xl font-bold text-balance">
            Meet the Experts Behind <span className="text-primary">Your Success</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of investment professionals brings decades of experience, combining expertise with
            innovation to deliver exceptional results for our clients.
          </p>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-excellence" className="bg-muted/40 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 id="team-excellence" className="text-2xl md:text-4xl font-bold">
              Team <span className="text-primary">Excellence</span>
            </h2>
            <p className="mt-2 text-muted-foreground">Our team’s collective expertise and achievements</p>
          </div>

          <TeamStats />
        </div>
      </section>
    </main>
  )
}
