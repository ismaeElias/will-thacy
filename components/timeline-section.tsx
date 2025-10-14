"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import imagem from "../public/foto.jpg"
import Image from "next/image"

interface TimelineSectionProps {
  year: string
  title: string
  description: string
  imageQuery: string
  alignment: "left" | "right"
}


export function TimelineSection({ year, title, description, imageQuery, alignment }: TimelineSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
            <Image src={imagem} alt={title}  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"/>
          </div>
          <div className={`space-y-4 sm:space-y-6 ${alignment === "right" ? "md:order-1" : "md:order-2"}`}>
            <div className={`inline-block ${alignment === "right" ? "md:float-right" : ""}`}>
              <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground font-serif text-lg sm:text-xl font-bold">
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
