import { Box, Container, Typography, Button } from '@mui/material'
import { Metadata } from '@redwoodjs/web'
import { Link } from '@redwoodjs/router'

const product = {
  title: "DPF, BPF, KATALİZÖR, EGR, TURBO, MANİFOLD TEMİZLEYİCİ 68334",
  description: "Turboşarz'lı ve turboşarz'sız tüm benzinli, lpg'li ve dizel motorlarda güvenle kullanılır. Yüksek performanslı formülü ile motorun içindeki birikintileri ve kurumları etkili şekilde temizler, egzoz emisyonunu azaltır ve yakıt verimliliğini artırır.",
  image: "/asd.png",
  details: [
    "DPF, BPF, Katalizör, EGR, Turbo ve Manifold sistemlerinde biriken kurum ve tortuları çözer.",
    "Motorun ömrünü uzatır ve performansını artırır.",
    "Yakıt tüketimini azaltır, egzoz emisyonunu düşürür.",
    "Tüm benzinli, dizel ve LPG'li araçlarda güvenle kullanılabilir.",
    "Kullanımı kolay, hızlı ve etkili sonuçlar sunar."
  ]
}

const ProductsPage = () => {
  return (
    <>
      <Metadata title="Ürünler" description="Ürünler sayfası" />
      <Box sx={{ background: 'linear-gradient(135deg, #1a237e 60%, #eaf2fb 100%)', minHeight: '100vh', py: 10 }}>
        {/* Ardina product image at the top, now responsive width */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 6 }}>
          <Box component="img" src="/productmore.png" alt="Ardina Product" sx={{ width: { xs: '90%', sm: 620, md: 840 }, maxWidth: 1200, height: 'auto', borderRadius: 3, boxShadow: '0 4px 24px rgba(26,35,126,0.13)', background: 'rgba(255,255,255,0.12)', p: 1, objectFit: 'contain', display: 'block' }} />
        </Box>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8 }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 6, md: 0 }, position: 'relative' }}>
            {/* Premium SVG accent and lines behind image */}
            <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, width: { xs: 240, md: 440 }, height: { xs: 240, md: 440 }, overflow: 'hidden' }}>
              <svg width="100%" height="100%" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
                <defs>
                  <radialGradient id="imgGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#eaf2fb" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1a237e" stopOpacity="0.1" />
                  </radialGradient>
                  <linearGradient id="snakeLine" x1="0" y1="0" x2="440" y2="440" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#1a237e" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <ellipse cx="220" cy="220" rx="180" ry="120" fill="url(#imgGlow)" />
                {/* Snake-like lines, all inside the box */}
                <path d="M40 60 Q120 120 60 200 Q0 280 120 320 Q240 360 320 280 Q400 200 320 120 Q240 40 120 60" stroke="url(#snakeLine)" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M80 120 Q180 180 120 260 Q60 340 200 360 Q340 380 360 260 Q380 140 260 120 Q140 100 80 120" stroke="url(#snakeLine)" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </Box>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: { xs: '80%', md: 380 },
                maxWidth: 420,
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(50,57,86,0.22)',
                border: '4px solid',
                borderImage: 'linear-gradient(135deg, #eaf2fb 40%, #1a237e 100%) 1',
                background: 'transparent',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: 'white', textShadow: '0 0 16px rgba(0,0,0,0.18)' }}>
              {product.title}
            </Typography>
            <Typography sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18 }}>
              {product.description}
            </Typography>
            <Box sx={{ mb: 4 }}>
              {product.details.map((detail, idx) => (
                <Typography key={idx} sx={{ color: '#eaf2fb', opacity: 0.95, mb: 1, fontSize: 16, pl: 2, position: 'relative' }}>
                  <span style={{ color: '#fff', fontWeight: 700, marginRight: 8 }}>•</span> {detail}
                </Typography>
              ))}
            </Box>
            <Button component={Link} to="/manual" variant="contained" sx={{ background: '#1a237e', color: '#fff', fontWeight: 800, px: 4, py: 2, borderRadius: 2, boxShadow: 'none', letterSpacing: 1, mt: 2, '&:hover': { background: '#283593' } }}>
              Kullanım Talimatına Bak
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductsPage
