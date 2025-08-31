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
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8 }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 6, md: 0 } }}>
            <Box component="img" src={product.image} alt={product.title} sx={{ width: { xs: '80%', md: 380 }, maxWidth: 420, borderRadius: 4, boxShadow: '0 4px 32px rgba(50,57,86,0.18)', background: '#fff', objectFit: 'cover' }} />
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
            <Button component={Link} to="/contact" variant="contained" sx={{ background: '#1a237e', color: '#fff', fontWeight: 800, px: 4, py: 2, borderRadius: 2, boxShadow: 'none', letterSpacing: 1, mt: 2, '&:hover': { background: '#283593' } }}>
              Kullanım Talimatına Bak
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductsPage
