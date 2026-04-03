/**
 * SmartDescription — powered by @chenglou/pretext
 *
 * WHY THIS EXISTS:
 * The normal CSS "Read More" trick uses:  max-height: 0 → max-height: 9999px
 * The animation has to travel through ALL 9999px of empty space even when the
 * actual text is only 80px tall. This makes the animation feel sluggish and
 * inconsistent across different text lengths.
 *
 * WHAT WE DO INSTEAD:
 * Pretext calculates the EXACT pixel height of the text at a given container
 * width using Canvas measureText (no DOM layout thrashing). We then animate
 * from the EXACT collapsed height to the EXACT expanded height.
 *
 * The result: a perfectly timed, smooth animation every time.
 */

import { useRef, useState, useLayoutEffect } from 'react'
import { prepare, layout } from '@chenglou/pretext'
import { motion } from 'motion/react'

// Must match the CSS applied to the description paragraph exactly.
// text-sm = 14px, font-light = 300
const DESCRIPTION_FONT = '300 14px Inter, ui-sans-serif, system-ui, sans-serif'

// leading-relaxed in Tailwind = line-height: 1.625
// 14px * 1.625 = 22.75px per line
const LINE_HEIGHT_PX = 22.75

// How many lines to show in collapsed state
const COLLAPSED_LINES = 2

type MeasuredState = {
  collapsedHeight: number
  fullHeight: number
  needsToggle: boolean
}

type Props = {
  text: string
  className?: string
}

export function SmartDescription({ text, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [measured, setMeasured] = useState<MeasuredState | null>(null)
  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    /**
     * Core Pretext measurement:
     * 1. prepare() — segments the text and caches canvas measurements (one-time cost)
     * 2. layout()  — pure arithmetic to get lineCount & height at a given width
     */
    const measure = () => {
      const width = el.getBoundingClientRect().width
      if (width < 1) return

      // Step 1: prepare (expensive, but cached — safe to call on resize)
      const prepared = prepare(text, DESCRIPTION_FONT)

      // Step 2: layout at this container's current pixel width (instant arithmetic)
      const { lineCount, height: fullHeight } = layout(prepared, width, LINE_HEIGHT_PX)

      // Collapsed = show only first N lines
      const collapsedHeight = Math.min(COLLAPSED_LINES, lineCount) * LINE_HEIGHT_PX
      const needsToggle = lineCount > COLLAPSED_LINES

      setMeasured({ collapsedHeight, fullHeight, needsToggle })
    }

    // Wait for Inter font to actually load before first measure
    // (Canvas measureText gives wrong widths if font isn't loaded yet)
    document.fonts.ready.then(measure)

    // Re-measure whenever the container resizes (e.g., window resize, grid reflow)
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [text])

  const currentHeight = expanded ? measured?.fullHeight : measured?.collapsedHeight

  return (
    <div ref={containerRef} className={className}>
      {/* Animate between EXACT heights — no max-height hack */}
      <motion.div
        animate={{ height: currentHeight ?? 'auto' }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
        style={{ height: measured ? currentHeight : 'auto' }}
      >
        <p className="text-white/40 text-sm font-light leading-relaxed">{text}</p>
      </motion.div>

      {/* Only show toggle if text actually overflows the collapsed height */}
      {measured?.needsToggle && (
        <motion.button
          onClick={() => setExpanded(e => !e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer"
        >
          {expanded ? '↑ Show less' : '↓ Read more'}
        </motion.button>
      )}
    </div>
  )
}
