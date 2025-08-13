import { Box, Container } from '@mui/material'
import React from 'react'

type Props = {
  children: React.ReactNode
  center?: boolean
  id?: string
  darkOverlay?: boolean
}

export default function FullScreenSection({ children, center = true, id, darkOverlay = false }: Props) {
  return (
    <Box
      id={id}
      component="section"
      className="snap-child"
      sx={{
        position: 'relative',
        minHeight: '100dvh', // better on mobile than 100vh
        display: 'flex',
        alignItems: center ? 'center' : 'stretch',
      }}
    >
      {darkOverlay && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)',
            pointerEvents: 'none',
          }}
        />
      )}
      <Container sx={{ position: 'relative', zIndex: 1 }}>{children}</Container>
    </Box>
  )
}
