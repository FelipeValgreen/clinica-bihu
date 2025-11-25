import { Shield, Clock, Users } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: "Entorno seguro",
    },
    {
      icon: Clock,
      text: "Atención 24/7",
    },
    {
      icon: Users,
      text: "Equipo multidisciplinario",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center space-x-2 text-white">
          <badge.icon className="h-5 w-5" />
          <span className="text-sm font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
