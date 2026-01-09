"use client"

import { HelpOptions } from "@/components/help-options"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Image from "next/image"
import pix from "../../public/pix.png"

export default function AjudaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-4 sm:mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a história
            </Button>
          </Link>
          <div className="text-center space-y-3 sm:space-y-4">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-primary" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance text-foreground px-4">
              Como Você Pode Ajudar
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed px-4">
              Sua presença é o maior presente! 
            </p>

          </div>
        </div>

        {/* Help Options */}
        <HelpOptions />

        <div className="mt-16  space-y-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance text-foreground px-4">
            Nos Abençoe por Pix
          </h2>
        </div>

        {/* Instruções PIX e QR Code lado a lado */}
        <div className="mt-8 sm:mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Instruções */}
            <div className="bg-secondary/30 rounded-lg p-6 sm:p-8 border-2 border-primary/20">
              <h3 className="font-serif text-xl sm:text-2xl text-center mb-6 text-foreground">
                Como fazer sua doação via PIX
              </h3>
              <ol className="space-y-4 text-left">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground pt-1">
                    Abra o aplicativo do seu banco
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground pt-1">
                    Acesse a área de PIX
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground pt-1">
                    Escolha a opção "Ler QR Code" ou "Pagar com QR Code"
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground pt-1">
                    Escaneie o QR Code ao lado com a câmera do seu celular
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    5
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground pt-1">
                    Confirme o valor e finalize a doação
                  </p>
                </li>
              </ol>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-full max-w-96 aspect-square rounded-xl border-2">
                <Image src={pix} alt="QR Code" width={404} height={404} className="w-full h-full object-contain p-1" />
              </div>
            </div>
          </div>
        </div>        
      </div>
    </main>
  )
}
