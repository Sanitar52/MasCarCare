import React from 'react'
import { Box, Container, Button, Typography } from '@mui/material'
import { Link } from '@redwoodjs/router'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxHero() {
  const ref = React.useRef<HTMLDivElement>(null)

  // Track scroll progress while the hero is in view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // 0 at hero top, 1 when bottom hits top
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.45])

  return (
    <Box ref={ref} component="section" sx={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden' }}>
      {/* Background video */}
      <Box
        component="video"
        src="/hero.mp4"           // put file in web/public/hero.mp4
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Darken for text & navbar readability */}
      <motion.div
        style={{ opacity: overlayOpacity as any }}
      />
      <Box
        sx={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Foreground content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <motion.div style={{ y: titleY as any, opacity: titleOpacity as any }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
            Ceramic protection for a mirror-like finish.
          </Typography>
          <Typography sx={{ opacity: 0.95, mb: 3, maxWidth: 680 }}>
            Hydrophobic, durable, engineered for enthusiasts & pros.
          </Typography>
          <Button component={Link} to="/products" variant="contained">Shop Products</Button>
        </motion.div>
      </Container>

      {/* Scroll hint (optional) */}
      <Box
        sx={{
          position: 'absolute', left: 0, right: 0, bottom: 16, textAlign: 'center',
          fontSize: 12, letterSpacing: '.2em', opacity: 0.85,
        }}
      >
        SCROLL
      </Box>
    </Box>
  )
}
