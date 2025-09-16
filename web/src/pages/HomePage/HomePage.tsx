import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from '@redwoodjs/router'
import ParallaxHero from 'src/components/ParallaxHero'
import Reveal from 'src/components/Reveal'
import ProductSpecifications from 'src/components/HomePageComponents/ProductSpecifications/ProductSpecifications'
import ProductUsages from 'src/components/HomePageComponents/ProductUsages/ProductUsages'
import { Metadata } from '@redwoodjs/web'

export default function HomePage() {
  return (
    <>
    <Metadata title="Anasayfa" description="Mascarcare Anasayfası" />
      {/* 1) Tam ekran video hero */}
      <ParallaxHero />

      {/* 2) Özellik vurguları (serbest kaydırma, görünümde ortaya çıkma) */}
      <ProductSpecifications  />

      {/* 3) Ürünler grid (kaydırınca ortaya çıkar) */}
      <ProductUsages />

      {/* Ardina product image + CTA as one section */}
      <Box component="section" sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(135deg, #1a237e 60%, #fff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 0
      }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 6, md: 8 } }}>
          <Box component="img" src="/productmore.png" alt="Ardina Product" sx={{ width: { xs: '90%', sm: 840, md: 1200 }, maxWidth: 900, height: 'auto', borderRadius: 3, boxShadow: '0 4px 24px rgba(26,35,126,0.13)', background: 'rgba(255,255,255,0.12)', p: 1, objectFit: 'contain', display: 'block' }} />
        </Box>
        <Container sx={{ textAlign: 'center' }}>
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: 'white' }}>
              Motorunuzu Koruyun, Performansını Artırın
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
