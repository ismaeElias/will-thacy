"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel"

interface TimelineSectionProps {
  year: string
  title: string
  description: string
  imageQuery: string
  alignment: "left" | "right"
}

const imagesByYear: Record<string, string[]> = {
  "2022": ["/images/2022/1.webp", "/images/2022/2.webp", "/images/2022/3.webp"],
  "2023": ["/images/2023/1.webp", "/images/2023/2.webp", "/images/2023/3.webp"],
  "2024": ["/images/2024/1.webp", "/images/2024/2.webp", "/images/2024/3.webp"],
  "2025": ["/images/2025/1.webp", "/images/2025/2.webp", "/images/2025/3.webp"],
  "2026": ["/images/2026/1.webp", "/images/2026/2.webp", "/images/2026/3.webp"],
}

export function TimelineSection({
  year,
  title,
  description,
  imageQuery,
  alignment,
}: TimelineSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Autoplay: avança a cada 4s enquanto a seção está visível
  useEffect(() => {
    if (!carouselApi || !isVisible) return
    const id = setInterval(() => {
      carouselApi.scrollNext()
    }, 4000)

    return () => clearInterval(id)
  }, [carouselApi, isVisible])

  const images = imagesByYear[year] ?? [
    "/images/2022/1.JPEG",
    "/images/2022/2.JPEG",
    "/images/2022/3.JPEG",
  ]

  return (
    <section
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center`}>
          <div className={`${alignment === "right" ? "md:order-2" : "md:order-1"}`}>
            <Carousel opts={{ loop: true }} setApi={setCarouselApi}>
              <CarouselContent>
                {images.map((src, idx) => (
                  <CarouselItem key={idx}>
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative rounded-lg overflow-hidden">
                      <Image src={src} alt={`${title} ${idx + 1}`} fill className="object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className={`space-y-4 sm:space-y-6 ${alignment === "right" ? "md:order-1" : "md:order-2"}`}>
            <div className={`inline-block `}>
              <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-primary font-serif text-lg sm:text-xl font-bold">
                {year}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-balance text-foreground">{title}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
            <div className={`w-20 sm:w-24 h-1 bg-primary/30 ${alignment === "right" ? "md:ml-auto" : ""}`} />
          </div>
        </div>
      </div>
    </section>
  )
}