"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type GsapSetup = () => void | (() => void)

/**
 * Runs the given GSAP setup function inside a gsap.context so that
 * every tween/ScrollTrigger created inside is scoped and cleaned up
 * automatically on unmount. The setup can optionally return a cleanup
 * function for custom teardown (e.g. removing window event listeners).
 */
export function useGsap(setup: GsapSetup, deps: React.DependencyList = []) {
  useEffect(() => {
    let userCleanup: void | (() => void)
    const ctx = gsap.context(() => {
      userCleanup = setup()
    })
    return () => {
      if (typeof userCleanup === "function") userCleanup()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export { gsap, ScrollTrigger }
