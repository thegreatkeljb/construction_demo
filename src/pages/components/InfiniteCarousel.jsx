import { Children, useEffect, useRef, useState } from "react";

/**
 * InfiniteCarousel: an auto-scrolling carousel that loops forever with no jump.
 *
 * The motion is a pure CSS animation (runs on the GPU, so it stays smooth even when
 * the main thread is busy). The component measures one copy of your items and repeats
 * it enough times to always fill the screen, then slides by exactly one copy and loops.
 *
 * Usage:
 *   <InfiniteCarousel speed={60} gap={32}>
 *     <ProjectCard image={Residential} title="Residential" desc="Horizontal / Vertical" />
 *     <ProjectCard image={Commercial} title="Commercial" desc="Mixed Use" />
 *     <ProjectCard image={Infrastructure} title="Infrastructure" desc="Transportation" />
 *   </InfiniteCarousel>
 *
 * Give each item a width (for example className="w-80") so the track can be measured.
 *
 * Props
 *   speed          pixels per second (default 50)
 *   direction      "left" (default) or "right"
 *   gap            space between items in px (default 32)
 *   pauseOnHover   pause while hovered or focused (default true)
 *   fade           soften the left and right edges (default true)
 *   className      classes for the outer container
 */

const CSS = `
@keyframes ic-scroll { to { transform: translate3d(calc(-1 * var(--ic-shift)), 0, 0); } }
.ic-track { animation: ic-scroll var(--ic-duration) linear infinite; will-change: transform; }
.ic-reverse { animation-direction: reverse; }
.ic-pause:hover, .ic-pause:focus-within { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .ic-track { animation: none; }
  .ic-root { overflow-x: auto; }
  .ic-clone { display: none; }
}
`;

const MASK = "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";

export default function InfiniteCarousel({
  children,
  speed = 50,
  direction = "left",
  gap = 32,
  pauseOnHover = true,
  fade = true,
  className = "",
  ...props
}) {
  const rootRef = useRef(null);
  const copyRef = useRef(null);
  const [size, setSize] = useState({ copy: 0, root: 0 });

  // Track the width of one copy of the items and of the visible area
  useEffect(() => {
    const measure = () => {
      const copy = copyRef.current?.getBoundingClientRect().width ?? 0;
      const root = rootRef.current?.getBoundingClientRect().width ?? 0;
      setSize((s) => (s.copy === copy && s.root === root ? s : { copy, root }));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (rootRef.current) observer.observe(rootRef.current);
    if (copyRef.current) observer.observe(copyRef.current);
    return () => observer.disconnect();
  }, []);

  const items = Children.toArray(children);
  const ready = size.copy > 0;
  // enough copies to cover the screen, plus one spare to scroll into
  const copies = ready ? Math.max(2, Math.ceil(size.root / size.copy) + 1) : 2;

  return (
    <div
      ref={rootRef}
      className={`ic-root overflow-hidden ${className}`}
      style={fade ? { WebkitMaskImage: MASK, maskImage: MASK } : undefined}
      {...props}
    >
      <style>{CSS}</style>

      <div
        className={`ic-track flex w-max ${direction === "right" ? "ic-reverse" : ""} ${
          pauseOnHover ? "ic-pause" : ""
        }`}
        style={{
          "--ic-shift": `${size.copy}px`,
          "--ic-duration": `${size.copy / speed}s`,
          animation: ready ? undefined : "none", // wait until measured to avoid a jump
        }}
      >
        {Array.from({ length: copies }).map((_, c) => (
          <div
            key={c}
            ref={c === 0 ? copyRef : undefined}
            aria-hidden={c > 0 || undefined}
            className={`flex shrink-0 ${c > 0 ? "ic-clone" : ""}`}
            style={{ gap, paddingRight: gap }} // trailing gap keeps spacing even across copies
          >
            {items.map((item, i) => (
              <div key={i} className="shrink-0">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}