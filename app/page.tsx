"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Volume2, VolumeX } from "lucide-react"

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
  const [currentPage, setCurrentPage] = useState(0) // 0: 첫번째, 1: 두번째, 2: 세번째(일정표), 3: 네번째(지도)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isBgmOn, setIsBgmOn] = useState(false)
  const [autoBgmTriggered, setAutoBgmTriggered] = useState(false)
  const touchStartXRef = useRef<number | null>(null)

  const images = ["/images/invitation-1.png", "/images/invitation-2.png", "/images/invitation-3.png"]

  const TOTAL_PAGES = 4

  const startBgm = (markAuto = false) => {
    const audio = audioRef.current
    if (!audio) return
    audio
      .play()
      .then(() => {
        setIsBgmOn(true)
        if (markAuto) setAutoBgmTriggered(true)
      })
      .catch(() => {
        setIsBgmOn(false)
      })
  }

  const goNextPage = () => {
    setCurrentPage((prev) => {
      if (prev === 0 && !isBgmOn && !autoBgmTriggered) {
        startBgm(true) // 처음 한 번만 자동으로 ON
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
        className="absolute top-4 right-4 z-30 rounded-full bg-white/20 text-white p-3 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:bg-white/30 active:scale-95 transition-all duration-200 hover:scale-110"
        aria-pressed={isBgmOn}
        aria-label={isBgmOn ? "BGM 끄기" : "BGM 켜기"}
      >
        {isBgmOn ? (
          <Volume2 className="w-6 h-6" strokeWidth={2.5} />
        ) : (
          <VolumeX className="w-6 h-6" strokeWidth={2.5} />
        )}
      </button>
      {!isMobile && <BokehEffect />}
      <Snowflakes />
      {!isMobile && <Sparkles />}
      {!isMobile && <ShimmerParticles />}
      <FloatingLights />

      <div
        onClick={goNextPage}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-screen cursor-pointer focus:outline-none z-20 active:scale-[0.98] transition-transform duration-150 touch-manipulation"
        aria-label="다음 페이지로 이동"
      >
        <div className={`absolute inset-0 flex items-center justify-center ${isMobile ? 'p-0' : 'p-3 sm:p-6 md:p-8'} pb-20`}>
          <div className={`relative w-full h-full ${isMobile ? '' : 'max-w-2xl'} flex items-center justify-center`}>
            {currentPage < 3 ? (
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

        {/* 페이지 인디케이터 */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none">
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* 네비게이션 바 */}
        <nav className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-900/95 to-neutral-900/80 backdrop-blur-md border-t border-white/10 z-30 pointer-events-auto">
          <div className="h-full flex items-center justify-around px-4">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentPage(0)
              }}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 0 || currentPage === 1
                  ? "text-amber-400 bg-amber-400/10"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-medium">초대장</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentPage(2)
              }}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 2
                  ? "text-amber-400 bg-amber-400/10"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-medium">일정</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentPage(3)
              }}
              className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 3
                  ? "text-amber-400 bg-amber-400/10"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs font-medium">오시는길</span>
            </button>
          </div>
        </nav>
      </div>
    </main>
  )
}
