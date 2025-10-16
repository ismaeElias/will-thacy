"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContributionModal } from "@/components/contribution-modal"
import { Gift, Home, Plane, Heart } from "lucide-react"
import Image from "next/image"

const helpOptions = [
  {
    id: "lua-de-mel",
    title: "Lua de Mel",
    description: "Ajude-nos a realizar a viagem dos nossos sonhos",
    icon: Plane,
    color: "text-primary",
    totalValue: 5000,
    image: "https://s3-us-west-2.amazonaws.com/blog-organize/wp-content/uploads/2019/08/06113658/honeymoon-8-1080x675.jpg",
  },
  {
    id: "festa",
    title: "Festa de Casamento",
    description: "Ajude a tornar nossa celebração ainda mais especial",
    icon: Heart,
    color: "text-primary",
    totalValue: 18000,
    image: "https://cdn0.casamentos.com.br/vendor/6225/3_2/960/jpeg/whatsapp-image-2023-06-26-at-18-19-13_13_386225-168781453231434.jpeg",
  },
  {
    id: "decoracao",
    title: "Decoração",
    description: "Ajude-nos a comprar decoração para a festa",
    icon: Heart,
    color: "text-primary",
    totalValue: 2200,
    image: "https://static.wixstatic.com/media/9551d2_eeef29baf8bc4eaf8eefb370d755e9cd~mv2.jpg/v1/fill/w_528,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9551d2_eeef29baf8bc4eaf8eefb370d755e9cd~mv2.jpg",
  },
  {
    id: "casa-nova",
    title: "Nossa Casa",
    description: "Contribua para mobiliar nosso novo lar",
    icon: Home,
    color: "text-accent",
    totalValue: 20000,
    image: "https://consorcioeldorado.com.br/wp-content/uploads/2024/04/trocar-a-mobilia-da-casa.jpeg",
  },
  {
    id: "fotografia",
    title: "Fotografia",
    description: "Ajude-nos a capturar momentos preciosos",
    icon: Home,
    color: "text-accent",
    totalValue: 4800,
    image: "https://www.enoivado.com.br/wp-content/uploads/2013/12/21.jpg",
  },
  {
    id: "filmagem",
    title: "Filmagem",
    description: "Ajude-nos a filmar momentos únicos",
    icon: Home,
    color: "text-accent",
    totalValue: 2800,
    image: "https://casamentoemharmonia.com.br/wp-content/uploads/2024/08/filmagem-casamento.jpg",
  },
  {
    id: "traje",
    title: "Vestimenta Noivos",
    description: "Ajude-nos a alugar vestimenta dos noivos",
    icon: Home,
    color: "text-accent",
    totalValue: 1200,
    image: "https://s3-us-west-2.amazonaws.com/blog-organize/wp-content/uploads/2019/04/11124231/terno-1080x594.jpg",
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
