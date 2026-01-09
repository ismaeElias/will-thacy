"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContributionModal } from "@/components/contribution-modal"
import { Gift, Home, Plane, Heart, Shirt, Camera } from "lucide-react"
import Image from "next/image"

const helpOptions = [
  {
    id: "lua-de-mel",
    title: "Lua de Mel",
    description: "Ajude-nos a realizar a viagem dos nossos sonhos",
    icon: Plane,
    color: "text-primary",
    totalValue: 5000,
    image: "help/lua.jpg",
  },
  {
    id: "festa",
    title: "Festa de Casamento",
    description: "Ajude a tornar nossa celebração ainda mais especial",
    icon: Heart,
    color: "text-primary",
    totalValue: 18000,
    image: "help/casamento.jpeg",
  },
  {
    id: "decoracao",
    title: "Decoração",
    description: "Ajude-nos a comprar decoração para a festa",
    icon: Heart,
    color: "text-primary",
    totalValue: 2200,
    image: "help/decoracao.avif",
  },
  {
    id: "casa-nova",
    title: "Nossa Casa",
    description: "Contribua para mobiliar nosso novo lar",
    icon: Home,
    color: "text-accent",
    totalValue: 20000,
    image: "help/casa.webp",
  },
  {
    id: "fotografia",
    title: "Fotografia",
    description: "Ajude-nos a capturar momentos preciosos",
    icon: Camera,
    color: "text-accent",
    totalValue: 4800,
    image: "help/fotografia.jpg",
  },
  {
    id: "filmagem",
    title: "Filmagem",
    description: "Ajude-nos a filmar momentos únicos",
    icon: Camera,
    color: "text-accent",
    totalValue: 2800,
    image: "help/filmagem.webp",
  },
  {
    id: "traje",
    title: "Vestimenta Noivos",
    description: "Ajude-nos a alugar vestimenta dos noivos",
    icon: Shirt,
    color: "text-accent",
    totalValue: 1200,
    image: "help/traje.jpg",
  }

]

export function HelpOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId)
    setIsModalOpen(true)
  }

  const selectedOptionData = helpOptions.find((opt) => opt.id === selectedOption)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {helpOptions.map((option) => {
          const Icon = option.icon
          return (
            <Card
              key={option.id}
              className="p-0 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 overflow-hidden group cursor-pointer"
              onClick={() => handleSelectOption(option.id)}
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${option.color}`} />
                </div>
              </div>

              <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl font-serif mb-2">{option.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{option.description}</CardDescription>
               
                {/* <p className="text-base sm:text-lg font-semibold text-primary mt-2 sm:mt-3">
                  Valor total: R$ {option.totalValue.toLocaleString("pt-BR")}
                </p>
                 */}
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <Button
                  onClick={() => handleSelectOption(option.id)}
                  className="w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 text-white font-semibold text-sm sm:text-base py-5 sm:py-6 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  size="lg"
                >
                  Escolher esta opção
                </Button>
                <p className="text-sm sm:text-base text-muted-foreground text-center">
                  Parcele em até 10x sem juros
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {selectedOptionData && (
        <ContributionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} option={selectedOptionData} />
      )}
    </>
  )
}
