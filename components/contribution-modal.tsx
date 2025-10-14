"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import type { LucideIcon } from "lucide-react"

interface ContributionModalProps {
  isOpen: boolean
  onClose: () => void
  option: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    totalValue: number
  }
}

export function ContributionModal({ isOpen, onClose, option }: ContributionModalProps) {
  const [name, setName] = useState("")
  const [paymentType, setPaymentType] = useState<"integral" | "parcelado">("integral")
  const [installments, setInstallments] = useState("1")
  const [percentage, setPercentage] = useState([50])

  const contributionValue = (option.totalValue * percentage[0]) / 100
  const installmentValue = paymentType === "parcelado" ? contributionValue / Number.parseInt(installments) : 0

  useEffect(() => {
    if (isOpen) {
      setPercentage([50])
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let message = `Olá! Gostaria de ajudar com: *${option.title}*\n\n`
    message += `Nome: ${name}\n`
    message += `Percentual escolhido: ${percentage[0]}%\n`
    message += `Valor da contribuição: R$ ${contributionValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`

    if (paymentType === "parcelado") {
      message += `Forma de pagamento: Parcelado em ${installments}x\n`
      message += `Valor de cada parcela: R$ ${installmentValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`
    } else {
      message += `Forma de pagamento: Valor integral\n`
    }

    message += `\nAguardo mais informações sobre como proceder. Obrigado!`

    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = "5547989081270"

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")

    onClose()
    setName("")
    setPaymentType("integral")
    setInstallments("1")
    setPercentage([50])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-full sm:max-w-md max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl sm:text-2xl">{option.title}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">{option.description}</DialogDescription>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-2">
            Valor total: R$ {option.totalValue.toLocaleString("pt-BR")}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center gap-2">
              <Label className="text-sm sm:text-base">Percentual de contribuição</Label>
              <span className="text-xl sm:text-2xl font-bold text-primary">{percentage[0]}%</span>
            </div>
            <Slider value={percentage} onValueChange={setPercentage} min={5} max={100} step={5} className="w-full" />
            <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground">
              <span>5%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-secondary rounded-lg space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-medium">Valor da sua contribuição:</span>
              <span className="text-lg sm:text-xl font-bold text-primary">
                R$ {contributionValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* Tipo de pagamento */}
          <div className="space-y-3">
            <Label>Forma de contribuição</Label>
            <RadioGroup
              value={paymentType}
              onValueChange={(value) => setPaymentType(value as "integral" | "parcelado")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="integral" id="integral" />
                <Label htmlFor="integral" className="font-normal cursor-pointer">
                  Valor integral
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parcelado" id="parcelado" />
                <Label htmlFor="parcelado" className="font-normal cursor-pointer">
                  Parcelado
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Número de parcelas */}
          {paymentType === "parcelado" && (
            <div className="space-y-2">
              <Label htmlFor="installments" className="text-sm sm:text-base">
                Número de parcelas
              </Label>
              <Input
                id="installments"
                type="number"
                min="1"
                max="10"
                value={installments}
                onChange={(e) => {
                  var value = Number(e.target.value)
                  if (value <= 10) {
                    setInstallments(value.toString())
                  }
                }}
                placeholder="Ex: 3"
                required
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Valor de cada parcela:{" "}
                <span className="font-semibold text-primary">
                  R$ {installmentValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          )}

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent order-2 sm:order-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 order-1 sm:order-2">
              Confirmar e enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
