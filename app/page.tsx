"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; size: number }>
  >([])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const flakeCount = isMobile ? 15 : 25 // 모바일에서 눈송이 수 줄이기
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 3 + Math.random() * 5,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white/90 rounded-full animate-fall backdrop-blur-sm"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
          }}
        />
      ))}
    </div>
  )
}

function Sparkles() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; top: number; left: number; delay: number }>>([])

  useEffect(() => {
    const sparks = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: 10 + Math.random() * 80,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 3,
    }))
    setSparkles(sparks)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-amber-300 rounded-full blur-sm" />
            <div className="absolute inset-0 bg-yellow-200 rounded-full scale-75" />
          </div>
        </div>
      ))}
    </div>
  )
}

function ShimmerParticles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; opacity: number }>
  >([])

  useEffect(() => {
    const parts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 6,
      opacity: 0.3 + Math.random() * 0.4,
    }))
    setParticles(parts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full animate-shimmer"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}

function FloatingLights() {
  const [lights, setLights] = useState<Array<{ id: number; top: number; left: number; delay: number; color: string }>>(
    [],
  )

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const colors = ["#d4af37", "#c41e3a", "#165b33", "#ffd700", "#8b0000"]
    const lightCount = isMobile ? 8 : 15 // 모바일에서 조명 수 줄이기
    const lightBulbs = Array.from({ length: lightCount }, (_, i) => ({
      id: i,
      top: 5 + Math.random() * 90,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)] || "#d4af37",
    }))
    setLights(lightBulbs)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute w-2 h-2 rounded-full animate-glow-soft"
          style={{
            top: `${light.top}%`,
            left: `${light.left}%`,
            animationDelay: `${light.delay}s`,
            backgroundColor: light.color,
            boxShadow: `0 0 20px ${light.color}, 0 0 40px ${light.color}40`,
          }}
        />
      ))}
    </div>
  )
}

function BokehEffect() {
  const [bokeh, setBokeh] = useState<
    Array<{ id: number; top: number; left: number; size: number; opacity: number; delay: number }>
  >([])

  useEffect(() => {
    const circles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 50 + Math.random() * 100,
      opacity: 0.05 + Math.random() * 0.1,
      delay: Math.random() * 5,
    }))
    setBokeh(circles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {bokeh.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full bg-gradient-to-br from-amber-300/40 to-red-400/40 animate-float-slow blur-2xl"
          style={{
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            opacity: circle.opacity,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function InvitationPage() {
  const [currentPage, setCurrentPage] = useState(0) // 0: 첫번째, 1: 두번째, 2: 세번째(지도)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isBgmOn, setIsBgmOn] = useState(false)
  const touchStartXRef = useRef<number | null>(null)

  const images = ["/images/invitation-1.png", "/images/invitation-2.png"]

  const TOTAL_PAGES = 3

  const startBgm = () => {
    const audio = audioRef.current
    if (!audio) return
    audio
      .play()
      .then(() => setIsBgmOn(true))
      .catch(() => {
        setIsBgmOn(false)
      })
  }

  const goNextPage = () => {
    setCurrentPage((prev) => {
      if (prev === 0 && !isBgmOn) {
        startBgm()
      }
      return (prev + 1) % TOTAL_PAGES
    })
  }

  const goPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES)
  }

  // 모바일에서 애니메이션 수 줄이기 (성능 최적화)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()

    // 배경 음악 루프 설정
    const audio = audioRef.current
    if (audio) {
      audio.loop = true
    }

    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleBgm = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isBgmOn) {
      audio.pause()
      setIsBgmOn(false)
    } else {
      startBgm()
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    const startX = touchStartXRef.current
    if (startX == null) return
    const endX = e.changedTouches[0].clientX
    const diffX = endX - startX
    const SWIPE_THRESHOLD = 50

    if (diffX > SWIPE_THRESHOLD) {
      // 오른쪽으로 스와이프 → 이전 페이지
      goPrevPage()
    } else if (diffX < -SWIPE_THRESHOLD) {
      // 왼쪽으로 스와이프 → 다음 페이지
      goNextPage()
    }

    touchStartXRef.current = null
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-950 relative overflow-hidden">
      {/* 배경 음악: /public/music/invitation.mp3 파일 필요 */}
      <audio
        ref={audioRef}
        src="/music/invitation.mp3"
        playsInline
      />
      <button
        onClick={toggleBgm}
        className="absolute top-4 right-4 z-30 rounded-full bg-white/15 text-white px-4 py-2 text-sm font-medium backdrop-blur shadow-lg border border-white/25 hover:bg-white/25 active:scale-95 transition"
        aria-pressed={isBgmOn}
      >
        {isBgmOn ? "BGM: ON" : "BGM: OFF"}
      </button>
      {!isMobile && <BokehEffect />}
      <Snowflakes />
      {!isMobile && <Sparkles />}
      {!isMobile && <ShimmerParticles />}
      <FloatingLights />

      <button
        onClick={goNextPage}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-screen cursor-pointer focus:outline-none z-20 active:scale-[0.98] transition-transform duration-150 touch-manipulation"
        aria-label="다음 페이지로 이동"
      >
        <div className={`absolute inset-0 flex items-center justify-center ${isMobile ? 'p-0' : 'p-3 sm:p-6 md:p-8'}`}>
          <div className={`relative w-full h-full ${isMobile ? '' : 'max-w-2xl'} flex items-center justify-center`}>
            {currentPage < 2 ? (
              <Image
                src={images[currentPage] || "/placeholder.svg"}
                alt={`크리스마스 초대장 ${currentPage + 1}`}
                fill
                className={`${isMobile ? 'object-cover' : 'object-contain'} animate-fadeIn-smooth drop-shadow-2xl`}
                priority
                quality={isMobile ? 85 : 95}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-black/40 px-6">
                <div className="w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-black/60">
                  <iframe
                    title="초대 장소 안내"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5210556049587!2d127.22066230000001!3d37.5427859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb3d2c6297287%3A0xd5949d75fb19b1da!2z7ZWY64Ko7KO87IKs656R6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1766388431246!5m2!1sko!2skr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="text-center text-sm text-white/90 space-y-1">
                  <p className="font-semibold">초대 장소</p>
                  <p>하남주사랑교회 (경기 하남시 덕풍동 764-1)</p>
                </div>
                <p className="text-xs text-white/70">좌우로 스와이프 하거나 탭해서 페이지를 넘길 수 있어요.</p>
              </div>
            )}
          </div>
        </div>
      </button>
    </main>
  )
}
