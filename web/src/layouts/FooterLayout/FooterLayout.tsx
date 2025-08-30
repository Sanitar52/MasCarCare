import { Box, Container, Grid, Typography } from '@mui/material'

type FooterLayoutProps = {
  children?: React.ReactNode
}

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <>
      {children}
      <Box component="footer" sx={{ background: '#eaf2fb', py: 6 }}>
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Left column: Logo, slogan, copyright */}
            <Grid item xs={12} md={4}  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              {/* Logo row */}
              <Box sx={{ mb: 10 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#323956', letterSpacing: 2 }}>
                  MasCarCare
                </Typography>
              </Box>
              {/* Slogan row */}
              <Box sx={{ mb: 10 }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#323956', lineHeight: 1.1 }}>
                  CAR CARE <Box component="span" sx={{ fontWeight: 400, letterSpacing: 2, borderBottom: '2px solid #323956', px: 0.5 }}>REDEFINED</Box>
                </Typography>
              </Box>
              {/* Copyright row */}
              <Box>
                <Typography sx={{ color: '#323956', opacity: 0.8, fontSize: 15 }}>
                  © 2025 MasCarCare. Bütün hakları saklıdır.
                </Typography>
              </Box>
            </Grid>
            {/* Middle column: Example content */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h6" align='center' sx={{ fontWeight: 700, mb: 2, color: '#323956' }}>Bölüm 2</Typography>
              <Typography sx={{ color: '#323956', opacity: 0.8, textAlign: 'center' }}>Daha uzun bir içerik örneği. Burada iletişim, linkler veya başka bilgiler olabilir.</Typography>
            </Grid>
            {/* Right column: Example content */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Box sx={{ width: '100%', maxWidth: 320 }}>
                <Typography variant="h6" align="center" sx={{ fontWeight: 700, mb: 2, color: '#323956' }}>Bölüm 3</Typography>
                <Typography sx={{ color: '#323956', opacity: 0.8, textAlign: 'center' }}>Kısa içerik.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default FooterLayout
