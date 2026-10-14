import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion"; // or "motion/react"

/**
 * StaggerReveal: its children slide in one after another (left to right in a row)
 * the first time the group scrolls into view.
 *
 * Usage:
 *   <StaggerReveal className="grid grid-cols-4 gap-8">
 *     <Card />
 *     <Card />
 *     <Card />
 *     <Card />
 *   </StaggerReveal>
 *
 * Props
 *   direction   which way the children travel: "right" (default, slides in from the left),
 *               "left", "up" (rises from below) or "down"
 *   distance    how far they travel in px (default 80)
 *   from        full control instead: { x, y, scale, opacity }. Overrides direction and distance
 *   stagger     seconds between each child (default 0.15)
 *   delay       seconds before the first child starts (default 0)
 *   duration    seconds each child takes to land (default 0.8)
 *   ease        easing curve (default: smooth ease-out)
 *   amount      how much of the group must be visible to trigger, 0 to 1 (default 0.2)
 *   once        play only the first time it is seen (default true)
 *   as          element for the group: "div" (default), "ul", "section", ...
 *   className   layout classes for the group (grid, flex, gap...)
 *   itemClassName  classes for the wrapper around each child (default "h-full" so grid cards keep equal heights)
 */
export default function StaggerReveal({
  children,
  as = "div",
  className = "",
  itemClassName = "h-full",
  direction = "right",
  distance = 80,
  from,
  stagger = 0.15,
  delay = 0,
  duration = 0.8,
  ease = [0.22, 1, 0.36, 1],
  amount = 0.2,
  once = true,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  // People who prefer reduced motion get the content in place, no animation
  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...props}>
        {Children.map(children, (child) => (
          <div className={itemClassName}>{child}</div>
        ))}
      </Plain>
    );
  }

  const Group = motion[as] ?? motion.div;

  // Where each child starts, based on the direction it travels
  const start = {
    right: { x: -distance },
    left: { x: distance },
    up: { y: distance },
    down: { y: -distance },
  }[direction];
  const hidden = from ?? { ...start, opacity: 0 };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const item = {
    hidden,
    show: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration, ease } },
  };

  return (
    <Group
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...props}
    >
      {Children.map(children, (child) => (
        <motion.div variants={item} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </Group>
  );
}