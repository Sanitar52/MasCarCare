import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { Metadata } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <Metadata title="İletişim" description="İletişim sayfası" />
      <Box sx={{ background: 'linear-gradient(135deg, #1a237e 60%, #eaf2fb 100%)', minHeight: '100vh', py: 10 }}>
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Box sx={{ mb: 6 }}>
            <img src="/mascarcarelogo.png" alt="MasCarCare Logo" style={{ width: 180, display: 'block', margin: '0 auto' }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: 'white', textShadow: '0 0 16px rgba(0,0,0,0.18)', textAlign: 'center' }}>
            Bize Ulaşın
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18, textAlign: 'center' }}>
            Her türlü soru, öneri veya iş birliği için aşağıdaki formu doldurabilirsiniz. Size en kısa sürede dönüş yapacağız.
          </Typography>
          <Box component="form" sx={{ width: '100%', background: 'rgba(255,255,255,0.08)', p: 4, borderRadius: 4, boxShadow: '0 4px 32px rgba(50,57,86,0.08)' }}>
            <TextField fullWidth label="Adınız" variant="outlined" sx={{ mb: 3, background: 'white', borderRadius: 2 }} />
            <TextField fullWidth label="E-posta" variant="outlined" sx={{ mb: 3, background: 'white', borderRadius: 2 }} />
            <TextField fullWidth label="Mesajınız" variant="outlined" multiline rows={4} sx={{ mb: 3, background: 'white', borderRadius: 2 }} />
            <Button type="submit" variant="contained" sx={{ background: '#1a237e', color: '#fff', fontWeight: 800, px: 4, py: 2, borderRadius: 2, boxShadow: 'none', letterSpacing: 1, mt: 2, '&:hover': { background: '#283593' } }}>
              Gönder
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ContactPage
