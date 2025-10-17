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
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-balance text-foreground px-4">
              Our History
            </h1>
             <h3 className="font-serif text-3xl text-balance text-foreground px-4">
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
        year="2018"
        title="O Primeiro Encontro"
        description="Foi em uma tarde ensolarada de primavera que nossos olhares se cruzaram pela primeira vez. Naquele momento, algo mágico aconteceu - uma conexão instantânea que mudaria nossas vidas para sempre."
        imageQuery="romantic couple first meeting in spring"
        alignment="left"
      />

      <TimelineSection
        year="2019"
        title="O Primeiro Beijo"
        description="Sob um céu estrelado, em uma noite que parecia feita especialmente para nós, aconteceu nosso primeiro beijo. Foi nesse momento que soubemos que estávamos destinados a estar juntos."
        imageQuery="romantic couple under stars at night"
        alignment="right"
      />

      <TimelineSection
        year="2020"
        title="Superando Desafios"
        description="Mesmo com todos os desafios que o mundo enfrentou, nosso amor só cresceu. Aprendemos que juntos podemos superar qualquer obstáculo e que nossa união é mais forte do que qualquer adversidade."
        imageQuery="couple holding hands together support"
        alignment="left"
      />

      <TimelineSection
        year="2022"
        title="O Pedido"
        description="Em um momento inesquecível, cercado de amor e emoção, fizemos a pergunta mais importante de nossas vidas. E a resposta foi um 'sim' que ecoará para sempre em nossos corações."
        imageQuery="romantic marriage proposal moment"
        alignment="right"
      />

      <TimelineSection
        year="2025"
        title="O Grande Dia"
        description="E agora, chegou o momento de celebrar nosso amor com as pessoas que mais amamos. Estamos ansiosos para compartilhar este dia especial com vocês e começar nossa nova jornada como marido e mulher."
        imageQuery="elegant wedding celebration"
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
