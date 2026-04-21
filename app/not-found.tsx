'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, RotateCcw, Phone } from 'lucide-react'
import { NotFoundScene } from '@/components/not-found-scene'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const [sceneKey, setSceneKey] = useState(0)

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.22),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.14),transparent_24%),linear-gradient(180deg,#050816_0%,#090b13_52%,#11131d_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/18 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,30rem)_minmax(0,34rem)] lg:items-center lg:gap-12">
          <section className="rounded-[2rem] border border-white/12 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/90">
                Lost In The Detail Bay
            </p>
            <div className="flex items-end gap-3">
              <h1 className="font-serif text-6xl leading-none sm:text-7xl">404</h1>
              <span className="mb-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
                Page Not Found
              </span>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/72 sm:text-base">
              This page missed the turnoff. The 3D badge is still here if you want to play with it, but the route you asked for is not.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/68 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-white">Drag</p>
                <p className="mt-1 leading-6">Orbit around the 404 badge.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-white">Scroll</p>
                <p className="mt-1 leading-6">Zoom in for the chrome detail.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-white">Shuffle</p>
                <p className="mt-1 leading-6">Reset the scene and spin up the animation again.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg shadow-primary/30">
                <Link href="/">
                  <Home />
                  Back Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/15 bg-white/8 text-white hover:bg-white/12 hover:text-white">
                <Link href="tel:+13309848257">
                  <Phone />
                  Call Now
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/18"
                onClick={() => setSceneKey((current) => current + 1)}
              >
                <RotateCcw />
                Reset Scene
              </Button>
            </div>
          </section>

          <section className="justify-self-center lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050816]">
                <NotFoundScene sceneKey={sceneKey} className="h-[260px] w-[min(86vw,420px)] sm:h-[320px] sm:w-[420px]" />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4 text-sm text-white/68">
                <div>
                  <p className="font-medium text-white">Interactive 404 badge</p>
                  <p className="mt-1">Smaller stage, same controls.</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/74">
                  3D Live
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}