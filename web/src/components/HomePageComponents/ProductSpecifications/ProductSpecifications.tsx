import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { Link } from "@redwoodjs/router"
import Reveal from "src/components/Reveal"

const ProductSpecifications = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 10, md: 10 },
          background: '#eaf2fb',
          overflow: 'hidden',
        }}
      >
        {/* SVG wavy lines background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.18 }}
          >
            <path
              d="M0,160 C360,320 1080,0 1440,160"
              stroke="#323956"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,220 C360,380 1080,60 1440,220"
              stroke="#323956"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,280 C360,440 1080,120 1440,280"
              stroke="#323956"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </Box>

        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Typography variant="subtitle2" sx={{ fontWeight: 400, mb: 10, fontFamily: 'sans-serif', color: "#323956", letterSpacing: 3.25, }} align="center"  >
              ARDINA CAR CARE
            </Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 900, mb: 10, color: "#323956" }}
              align="center"
            >
              ARDINA CAR CARE OLARAK,

              KALİTE,
              DAYANIKLILIK
              <Box component="span" sx={{ fontSize: '0.3em', fontWeight: 500 }}>
                {"  VE  "}
              </Box>
              KULLANIM KOLAYLIĞI SUNUYORUZ <br />
              
            </Typography>
          </Reveal>
          <Reveal delay={0.16}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
              <Button
                variant="outlined"
                component={Link}
                to="/products"
                sx={{
                  px: 4,
                  py: 3,
                  fontWeight: 800,
                  fontSize: 16,
                  color: '#323232',
                  border: '2px solid #323323',
                  background: 'transparent',
                  borderRadius: 0,
                  boxShadow: 'none',
                  letterSpacing: 0.1,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: '#323956',
                    color: '#fff',
                    borderColor: '#323956',
                  },
                }}
              >
                MASCARCARE'I KEŞFET
              </Button>
            </Box>
          </Reveal>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
            <Grid container spacing={4}>
              {[
                ['Yüksek hidrofobi', 'Su damlaları yüzeyden hızla kayar.'],
                ['SiO₂ seramik kaplama', 'Yıllar içinde ölçülen dayanıklı koruma.'],
                ['UV & kimyasal direnç', 'Sert ortamlara karşı koruma sağlar.'],
              ].map(([title, text], i) => (
                <Grid item xs={12} md={6} key={title}>
                  <Reveal y={28} delay={i * 0.06}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#323232' }}>{title}</Typography>
                    <Typography sx={{ opacity: 0.8 }}>{text}</Typography>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}
export default ProductSpecifications
