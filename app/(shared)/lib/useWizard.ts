import { useState } from "react"

/**
 * Stepper for wizards.
 * Pass a tulp as an argument. Pass an union type of the tulp as a generic.
 *
 * const steps = ["Name", "Details", "Confirm"] as const
 * const wizard = useWizard<(typeof steps)[number]>(steps)
 */
const useWizard = <T>(list: readonly T[]) => {
  const [wizard, setWizard] = useState(list)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState(list[currentIndex])

  const next = () => {
    if (currentIndex === wizard.length - 1) return
    setCurrentIndex((current) => current + 1)
    setCurrentStep(wizard[currentIndex + 1])
  }

  const prev = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prev) => prev - 1)
    setCurrentStep(wizard[currentIndex - 1])
  }

  const current = () => {
    return currentStep
  }

  return { next, prev, current }
}

export { useWizard }
