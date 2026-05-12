import { useEffect, RefObject } from 'react';

export function useFadeIn(ref: RefObject<Element | null>, threshold = 0.1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    (el as HTMLElement).style.transform = 'translateY(22px)';
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
}
