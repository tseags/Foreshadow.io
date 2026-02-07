import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
