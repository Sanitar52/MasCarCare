import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from '@redwoodjs/router'
import ParallaxHero from 'src/components/ParallaxHero'
import Reveal from 'src/components/Reveal'

export default function HomePage() {
  return (
    <>
      {/* 1) Full-screen video hero */}
      <ParallaxHero />

      {/* 2) Feature highlights (free scroll, reveal on view) */}
      <Box component="section" sx={{ py: { xs: 10, md: 18 } }}>
        <Container>
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              Engineered for performance
            </Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography sx={{ opacity: 0.85, mb: 6, maxWidth: 820 }}>
              SiO₂ ceramic chemistry, extreme hydrophobics, and long-lasting gloss.
            </Typography>
          </Reveal>

          <Grid container spacing={4}>
            {[
              ['Extreme hydrophobicity', 'Water beads and sheets instantly.'],
              ['SiO₂ ceramic coating', 'Durable protection measured in years.'],
              ['UV & chemical resistance', 'Shields against harsh environments.'],
              ['Mirror-like finish', 'Deep gloss and clarity on every panel.'],
            ].map(([title, text], i) => (
              <Grid item xs={12} md={6} key={title}>
                <Reveal y={28} delay={i * 0.06}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{title}</Typography>
                  <Typography sx={{ opacity: 0.8 }}>{text}</Typography>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3) Product grid (reveals as you scroll) */}
      <Box component="section" sx={{ py: { xs: 10, md: 18 }, background: 'rgba(255,255,255,0.03)' }}>
        <Container>
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              Featured products
            </Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography sx={{ opacity: 0.85, mb: 6 }}>
              Top picks loved by detailers worldwide.
            </Typography>
          </Reveal>

          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Grid key={n} item xs={12} sm={6} md={4}>
                <Reveal y={22} delay={(n % 3) * 0.08}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.08)',
                      minHeight: 220,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography>Product {n}</Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4) CTA (reveals on enter; replays on revisit) */}
      <Box component="section" sx={{ py: { xs: 12, md: 20 } }}>
        <Container sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
              Ready to coat?
            </Typography>
          </Reveal>
          <Reveal delay={0.12}>
            <Button component={Link} to="/contact" variant="contained">Contact Us</Button>
          </Reveal>
        </Container>
      </Box>
    </>
  )
}
