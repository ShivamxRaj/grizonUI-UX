import { useEffect } from 'react';

/**
 * Sarvam-exact scroll reveal using IntersectionObserver.
 * Adds 'is-revealed' class to [data-section-reveal] and [data-scale-reveal] elements.
 * Threshold 0.12 — same as Sarvam's implementation.
 */
export function useReveal(containerRef) {
  useEffect(() => {
    const container = containerRef?.current || document;
    const els = container.querySelectorAll(
      '[data-section-reveal], [data-scale-reveal]'
    );

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}

/**
 * Sarvam-exact radial glow on buttons.
 * Tracks mousemove → sets CSS vars --gx --gy on each .btn element.
 */
export function useButtonGlow(containerRef) {
  useEffect(() => {
    const container = containerRef?.current || document;
    const btns = container.querySelectorAll('.btn');

    const handlers = [];
    btns.forEach((btn) => {
      const handler = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty('--gx', `${x}%`);
        btn.style.setProperty('--gy', `${y}%`);
      };
      btn.addEventListener('mousemove', handler);
      handlers.push({ btn, handler });
    });

    return () => {
      handlers.forEach(({ btn, handler }) =>
        btn.removeEventListener('mousemove', handler)
      );
    };
  }, [containerRef]);
}

/**
 * Navbar scroll detection — adds 'scrolled' class at 24px.
 * Sarvam's exact threshold.
 */
export function useNavbarScroll() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 24) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

/**
 * Counter animation — animates a number from 0 to target.
 */
export function useCounter(ref, target, suffix = '', prefix = '', duration = 1800) {
  useEffect(() => {
    if (!ref?.current) return;
    const el = ref.current;
    const isFloat = String(target).includes('.');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const update = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = target * eased;
          el.textContent =
            prefix +
            (isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString()) +
            suffix;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix, prefix, duration]);
}
