import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from '@redwoodjs/router'
import ParallaxHero from 'src/components/ParallaxHero'
import Reveal from 'src/components/Reveal'
import ProductSpecifications from 'src/components/HomePageComponents/ProductSpecifications/ProductSpecifications'
import ProductUsages from 'src/components/HomePageComponents/ProductUsages/ProductUsages'

export default function HomePage() {
  return (
    <>
      {/* 1) Tam ekran video hero */}
      <ParallaxHero />

      {/* 2) Özellik vurguları (serbest kaydırma, görünümde ortaya çıkma) */}
      <ProductSpecifications  />

      {/* 3) Ürünler grid (kaydırınca ortaya çıkar) */}
      <ProductUsages />

      {/* 4) CTA (görünümde ortaya çıkar; tekrar ziyaretlerde yeniden oynar) */}
      <Box component="section" sx={{ py: { xs: 12, md: 20 } }}>
        <Container sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
              Kaplamaya hazır mısınız?
            </Typography>
          </Reveal>
          <Reveal delay={0.12}>
            <Button component={Link} to="/contact" variant="contained">Bize Ulaşın</Button>
          </Reveal>
        </Container>
      </Box>
    </>
  )
}
