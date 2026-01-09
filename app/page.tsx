import Link from "next/link"
import { TimelineSection } from "@/components/timeline-section"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
          
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary animate-pulse" />
            <h1 className="font-serif text-5xl  md:text-7xl lg:text-8xl text-balance text-foreground px-4">
              Our History
            </h1>
             <h3 className="font-serif sm:text-4xl text-3xl text-balance text-foreground px-4">
              Will & Thacy
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance px-4">
              "E isto é pelo que o Senhor nos fez."
            </p>
            <p className="text-lg text-muted-foreground text-balance px-4">
              Exodo 13:8
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-8 sm:w-12 h-px bg-border" />
            <span className="text-xs sm:text-sm">Role para descobrir</span>
            <div className="w-8 sm:w-12 h-px bg-border" />
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <TimelineSection
        year="2022"
        title="O Primeiro Encontro"
        description="Aconteceu durante uma ação social em uma igrejinha na Eça de Queiroz. Amigos em comum acabaram criando novas oportunidades de encontro, até que ele tomou coragem e a convidou para ir ao cinema. O primeiro beijo aconteceu na noite do aniversário dela e em 08/06/2022, veio o pedido de namoro."
        imageQuery="/images/2022/2.webp"
        alignment="left"
      />

      <TimelineSection
        year="2023"
        title="Superando Desafios"
        description="A caminhada não foi simples. O intercambio para os Estados Unidos os separou por 2 anos inteiros. Em suas mentes, parecia simples manter um namoro a distância, até que se depararam com a falta de comunicação, desafios de fuso horário e tudo isso os afetou mais do que imaginavam. Após alguns meses de distância, chegaram ao fim."
        imageQuery="/images/2023/4.webp"
        alignment="right"
      />

      <TimelineSection
        year="2024"
        title=" O Reencontro"
        description="Era julho. Ela já de volta ao Brasil. Foi quando seus olhares se cruzaram novamente naquela mesma igrejinha na Eça de Queiroz. O coração acelerado e os olhares se procurando no local, foi o que revelou que o amor ainda estava ali, esperando o recomeço, desta vez, com mais maturidade em Cristo."
        imageQuery="/images/2024/3.webp"
        alignment="left"
      />

      <TimelineSection
        year="2025"
        title="O Pedido"
        description="Eles novamente se encontravam em rodas de amigos em comum (coincidência nê?), e o segundo “sim” veio em 31/12/2024. Sete meses se passaram e veio o sonhado e desejado pedido de casamento. Ele tinha apenas uma missão: surpreendê-la. E conseguiu. Em um jantar à luz de velas e uma pequena cerimônia, foi celebrado esse momento ao lado das pessoas que mais amam."
        imageQuery="/images/2025/1.webp"
        alignment="right"
      />

      <TimelineSection
        year="2026"
        title="O Grande Dia"
        description="Este é o ano em que irão selar sua decisão diante dos homens e de Deus. Seus corações estão ansiosos e, por vezes, apreensivos, mas não temem, pois confiam na forte mão do Deus a quem servem. Será um dia em que guardaram consigo eternamente e lembraram aos seus filhos dizendo: “E isto é pelo o que eles nos fez!”"
        imageQuery="/images/2026/3.webp"
        alignment="left"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-t from-secondary/30 to-background">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance text-foreground px-4">
              Faça Parte da Nossa História
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance leading-relaxed px-4">
              Sua presença é o maior presente, mas se desejar nos ajudar a começar nossa nova vida juntos, preparamos
              algumas opções especiais.
            </p>
          </div>
          <Link href="/ajuda" scroll={true}>
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Como Ajudar
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
