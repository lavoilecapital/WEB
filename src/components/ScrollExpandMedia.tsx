import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  posterSrc?: string;
  scrollToExpand?: string;
  overlayContent?: ReactNode;
  onScrollProgress?: (progress: number) => void;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  posterSrc,
  scrollToExpand = 'Scroll to discover',
  overlayContent,
  onScrollProgress,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        onScrollProgress?.(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        onScrollProgress?.(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  // Video pans from bottom (80%) to top (0%) as scroll progresses
  // Gives the effect of "rising" through the video toward the Burj tip
  const videoObjectPosition = `center ${Math.round(80 - scrollProgress * 80)}%`;

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-screen bg-[#0A0A0A]">
        <div className="relative w-full flex flex-col items-center min-h-screen">
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full min-h-screen relative">

              {/* Expanding + panning video */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 60px rgba(0,0,0,0.5)',
                  transition: 'none',
                }}
              >
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: videoObjectPosition,
                    transition: 'none',
                  }}
                />
                {/* Overlay darkens at start, fades as video expands */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(0,0,0,0.45)',
                    opacity: Math.max(0, 0.8 - scrollProgress * 0.8),
                    transition: 'none',
                  }}
                />
              </div>

              {/* Overlay text — splits left/right on scroll */}
              {overlayContent && (
                <div
                  className="relative z-10 w-full flex flex-col items-center pointer-events-none px-6"
                  style={{
                    opacity: Math.max(0, 1 - scrollProgress * 2.5),
                    transition: 'none',
                  }}
                >
                  {overlayContent}
                </div>
              )}

              {/* Scroll hint */}
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                style={{
                  opacity: Math.max(0, 1 - scrollProgress * 4),
                  transition: 'none',
                }}
              >
                <p className="text-white/50 text-[0.65rem] font-semibold tracking-[0.25em] uppercase">
                  {scrollToExpand}
                </p>
                <svg width="14" height="22" viewBox="0 0 16 24" fill="none" className="animate-bounce">
                  <rect x="6.5" y="3" width="3" height="6" rx="1.5" fill="white" opacity="0.4" />
                  <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5" opacity="0.25" />
                </svg>
              </div>
            </div>

            {/* Content after full expansion */}
            <div
              className="flex flex-col w-full"
              style={{
                opacity: showContent ? 1 : 0,
                transition: 'opacity 0.7s ease',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
