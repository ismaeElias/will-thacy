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
        description="Aconteceu durante uma ação social em uma igrejinha na Eça de Queiroz. Amigos em comum acabaram criando novas oportunidades para eles se verem novamente, até que ele tomou coragem e a convidou para ir ao cinema. Seus encontros foram marcados por longas horas de muitas conversas. Era curioso como, quando estavam juntos, eles sempre reclamavam como os ponteiros do relógio pareciam correr mais depressa. Até que, na noite do aniversário dela, foi onde se beijaram pela primeira vez. Em 08/06/2022 veio o pedido de namoro."
        imageQuery="/images/2022/2.webp"
        alignment="left"
      />

      <TimelineSection
        year="2023"
        title="Superando Desafios"
        description="A caminhada não foi simples. O intercâmbio dela para os Estados Unidos os separou por dois anos inteiros. Em suas mentes, parecia simples manter um namoro à distância, até que se depararam com a falta de comunicação, os desafios do fuso horário, e tudo isso os afetou mais do que imaginavam. Após alguns meses de distância, chegaram ao fim."
        imageQuery="/images/2023/4.webp"
        alignment="right"
      />

      <TimelineSection
        year="2024"
        title=" O Reencontro"
        description="Era julho. Ela já de volta ao Brasil. Foi quando seus olhares se cruzaram novamente naquela mesma igrejinha na Eça de Queiroz em um culto de quarta-feira, lá onde se virão pela primeira vez. O coração acelerado e os olhares que se procuravam, foi o que revelou que o amor ainda estava ali, esperando o recomeço, desta vez, com mais maturidade em Cristo. Sim, Deus é especialista em histórias de amor!"
        imageQuery="/images/2024/3.webp"
        alignment="left"
      />

      <TimelineSection
        year="2025"
        title="O Pedido"
        description="Novamente, eles passaram a se encontrar nas rodas de amigos em comum (coincidência né?). Ela fez o primeiro contato entregando a ele uma carta que havia escrito, com mais de dez páginas (frente e verso). Foram alguns encontros e muitas conversas até que, em 31/12/2024 aconteceu o segundo pedido de namoro. Após sete meses, veio o sonhado e desejado pedido de casamento. Ele a surpreendeu numa noite chuvosa de setembro. Um jantar à luz de velas e em uma pequena cerimônia, foi celebrado o noivado ao lado das pessoas que mais amam."
        imageQuery="/images/2025/1.webp"
        alignment="right"
      />

      <TimelineSection
        year="2026"
        title="O Grande Dia"
        description="14/03/2026. Esta é a data em que selarão o “Sim” diante dos homens e de Deus. Seus corações estão ansiosos e, por vezes, apreensivos, mas não temem, pois confiam na forte mão do Deus, a quem servem. Será um dia que guardarão para sempre em seus corações e que um dia contarão aos seus filhos, dizendo: “E isto é pelo que Ele nos fez.”"
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
