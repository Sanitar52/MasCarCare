import React from 'react'
import { Box, Container, Button, Typography } from '@mui/material'
import { Link } from '@redwoodjs/router'
import { motion, useScroll, useTransform } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


function formatTime(t: number) {
  if (!isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function ParallaxHero() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Track scroll progress while the hero is in view (for subtle parallax)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  // ---- Video progress state
  const [duration, setDuration] = React.useState(0)
  const [current, setCurrent] = React.useState(0)
  const progress = duration ? Math.min(current / duration, 1) : 0

  const onLoadedMetadata = () => {
    const v = videoRef.current
    if (v?.duration) setDuration(v.duration)
  }
  const onTimeUpdate = () => {
    const v = videoRef.current
    if (v) setCurrent(v.currentTime)
  }

  return (
    <Box ref={sectionRef} component="section" sx={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden' }}>
      {/* Background video */}
      <Box
        component="video"
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Dark overlay for readability (static) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
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
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: 'white', }} align="left">
            ARDINA CARE, < br />
            ARABA SEVENLER İÇİN
          </Typography>
          <Button component={Link} to="/products" variant="outlined"
            sx={{
              mt: 4,
              px: 4,
              py: 2,
              fontWeight: 800,
              fontSize: 14,
              color: 'white',
              border: '2px solid white',
              background: 'transparent',
              borderRadius: 0,
              boxShadow: 'none',
              letterSpacing: 1,
              transition: 'all 0.2s',
              '&:hover': {
                background: 'white',
                color: 'black',
                borderColor: 'white',
              },
            }}
          >
            ARDINA CARE'I KEŞFET
          </Button>
        </motion.div>
      </Container>

      {/* ---- Video progress bar (like GYEON) */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 18,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          pointerEvents: 'none', // bar is display-only
        }}
      >
        <Box
          sx={{
            width: { xs: '70%', sm: '60%', md: 520 },
            height: 10,
            borderRadius: 999,
            border: '2px solid rgba(255,255,255,0.95)',
            background: 'rgba(0,0,0,0.25)',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.18) inset',
          }}
        >
          <motion.div
            key="progress-fill"
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            style={{
              height: '100%',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.95)',
            }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
          />
        </Box>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: 64,
            color: 'rgba(255,255,255,0.85)',
            mt: 2,
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))',
          }}
        />
      </Box>
    </Box>
  )
}
